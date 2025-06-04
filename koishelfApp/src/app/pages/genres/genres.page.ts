import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service'; // servicio que interactúa con Firebase
import { AuthService } from 'src/app/services/auth.service'; // Si tenés un servicio de auth con el UID del usuario
import { ToastController } from '@ionic/angular';

interface UserProfile {
  genres?: string[];
}

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  standalone:false
})
export class GenresPage implements OnInit {

  selectedGenres: string[] = [];

  availableGenres: string[] = ['Acción', 'Comedia', 'Drama', 'Fantasía', 'Terror'];

  userId: string = '';

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    const profile = localStorage.getItem('profile');
    console.log("en OnInit de");
    if (profile) {
      const user = JSON.parse(profile);
      this.userId = user.id;
      console.log("Usuario encontardo " ,this.userId);
      if (this.userId) {
  this.db.getDocumentById('users', this.userId).subscribe({
    next: (userData: UserProfile) => {
      console.log("userData completo:", userData);
      if (userData?.genres?.length) {
        this.selectedGenres = userData.genres;
        console.log("Géneros guardados:", this.selectedGenres);
      } else {
        console.log("No hay géneros guardados.");
      }
    },
    error: (error) => {
      console.error('Error al cargar géneros guardados:', error);
      this.presentToast('Error al cargar tus géneros. Intenta de nuevo.', 'danger');
    }
  });
}
    }
  }
  toggleGenre(genre: string) {
    const index = this.selectedGenres.indexOf(genre);
    if (index === -1) {
      this.selectedGenres.push(genre); // lo agrega si no está
    } else {
      this.selectedGenres.splice(index, 1); // lo remueve si ya estaba
    }
  }

  
   async guardarGeneros() { // ¡Cambiamos a 'async' porque usaremos 'await'!
    if (!this.userId) {
      this.presentToast('No se pudo obtener el ID del usuario.', 'danger');
      return;
    }

    const data = {
      genres: this.selectedGenres // O 'genre' si lo cambiaste para Firebase
    };

    try {
      await this.db.updateFireStoreDocument('users', this.userId, data);
      console.log('Géneros guardados con éxito');
      this.presentToast('¡Géneros guardados con éxito!', 'success'); // Tostadita de éxito
    } catch (err) {
      console.error('Error al guardar géneros:', err);
      this.presentToast('Error al guardar géneros. Intenta de nuevo.', 'danger'); // Tostadita de error
    }
  }

  // --- Nuevo método para mostrar las tostadas ---
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos (2 segundos)
      position: 'bottom', // Posición en la pantalla (top, middle, bottom)
      color: color, // Color del toast (primary, secondary, success, danger, warning, etc.)
      buttons: [ // Opcional: un botón para cerrar el toast
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }
}

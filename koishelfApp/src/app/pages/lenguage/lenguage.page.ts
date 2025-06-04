import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

interface UserProfile {
  lenguage?: string[];
}

@Component({
  selector: 'app-lenguage',
  templateUrl: './lenguage.page.html',
  styleUrls: ['./lenguage.page.scss'],
  standalone:false
})
export class LenguagePage implements OnInit {

  selectedLanguage: string[] = [];
  
    availableLanguage: string[] = ['Español', 'Inglés', 'Italiano', 'Potugues', 'Japonés'];
  
    userId: string = '';
  
    constructor(
      private auth: AuthService,
      private db: DatabaseService,
      private toastController: ToastController
    ) { }
  
    async ngOnInit() {
      const profile = localStorage.getItem('profile');
      if (profile) {
        const user = JSON.parse(profile);
        this.userId = user.id;
        if (this.userId) {
          this.db.getDocumentById('users', this.userId).subscribe({
            next: (userData: UserProfile) => {
              console.log("userData completo:", userData);
              if (userData?.lenguage?.length) {
                this.selectedLanguage = userData.lenguage;
                console.log("Idiomas guardados:", this.selectedLanguage);
              } else {
                console.log("No hay idiomas guardados.");
              }
            },
            error: (error) => {
              console.error('Error al cargar idiomas guardados:', error);
              this.presentToast('Error al cargar tus idiomas. Intenta de nuevo.', 'danger');
            }
          });
        }
      }
    }
    toggleIdioma(lenguage: string) {
      const index = this.selectedLanguage.indexOf(lenguage);
      if (index === -1) {
        this.selectedLanguage.push(lenguage); // lo agrega si no está
      } else {
        this.selectedLanguage.splice(index, 1); // lo remueve si ya estaba
      }
    }
  
    
     async guardarIdiomas() { // ¡Cambiamos a 'async' porque usaremos 'await'!
      if (!this.userId) {
        this.presentToast('No se pudo obtener el ID del usuario.', 'danger');
        return;
      }
  
      const data = {
        lenguage: this.selectedLanguage 
      };
  
      try {
        await this.db.updateFireStoreDocument('users', this.userId, data);
        console.log('Idiomas guardados con éxito');
        this.presentToast('¡Idiomas guardados con éxito!', 'success'); // Tostadita de éxito
      } catch (err) {
        console.error('Error al guardar idiomas:', err);
        this.presentToast('Error al guardar idiomas. Intenta de nuevo.', 'danger'); // Tostadita de error
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

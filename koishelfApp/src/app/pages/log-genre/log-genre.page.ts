import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-log-genre',
  templateUrl: './log-genre.page.html',
  styleUrls: ['./log-genre.page.scss'],
  standalone: false
})
export class LogGenrePage implements OnInit {

  selectedGenres: string[] = [];
  
  availableGenres: string[] = ['Acción', 'Comedia', 'Drama', 'Fantasía', 'Terror'];
  
  userId: string = '';
  
  constructor(
    private auth: AuthService,
    private db: DatabaseService
  ) { 
     console.log('Constructor de LogGenrePage');
  }
  
  async ngOnInit() {
  const profile = localStorage.getItem('profile');
  if (profile) {
    const user = JSON.parse(profile);
    this.userId = user.id;
    console.log("hola");
    // Cargar géneros guardados desde Firestore
    this.db.getDocumentById('users', this.userId).subscribe(userDoc => {
      if (userDoc && userDoc.genres) {
        this.selectedGenres = userDoc?.genres;
        console.log(userDoc?.genres)
      }
    });
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
  
  async guardarGeneros() {
    if (!this.userId) {
      console.log('No se pudo obtener el ID del usuario.');
      return;
    }

    const data = {
      genres: this.selectedGenres
    };

    try {
      await this.db.updateFireStoreDocument('users', this.userId, data);
      console.log('Géneros guardados con éxito');
    } catch (err) {
      console.error('Error al guardar géneros:', err);
    }
  }
}

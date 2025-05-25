import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-log-languages',
  templateUrl: './log-languages.page.html',
  styleUrls: ['./log-languages.page.scss'],
  standalone:false
})
export class LogLanguagesPage implements OnInit {

  selectedLanguage: string[] = [];
  
  availableLanguage: string[] = ['Español', 'Inglés', 'Italiano', 'Potugues', 'Japonés'];
  
  userId: string = '';
  
  constructor(
    private auth: AuthService,
    private db: DatabaseService
  ) { }
  
  async ngOnInit() {
    const profile = localStorage.getItem('profile');
    if (profile) {
      const user = JSON.parse(profile);
      this.userId = user.id;
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
  
  async guardarIdiomas() {
    if (!this.userId) {
      console.log('No se pudo obtener el ID del usuario.');
      return;
    }

    const data = {
      lenguage: this.selectedLanguage
    };

    try {
      await this.db.updateFireStoreDocument('users', this.userId, data);
      console.log('Idiomas guardados con éxito');
    } catch (err) {
      console.error('Error al guardar idiomas:', err);
    }
  }

}

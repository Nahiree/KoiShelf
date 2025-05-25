import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone:false
})
export class LibraryPage implements OnInit {
  favoritosIds: string[] = [];        // Aquí se guarda el array de ids de favoritos
  mangasFavoritos: any[] = [];        // Aquí se guarda el resultado final con los datos completos de cada manga
segmentValue: string = 'terminados';
  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    // Paso 1: obtener el UID desde el localStorage
    
    const profile = localStorage.getItem('profile');
    const userId = profile ? JSON.parse(profile).id : '';

    // Paso 2: si hay UID, obtenemos el documento del usuario
    if (userId) {
      this.db.getDocumentById('users', userId).subscribe(userDoc => {
        this.favoritosIds = userDoc?.library || [];
        console.log(userDoc?.library);
        console.log(this.favoritosIds);
        // Paso 3: ahora buscamos los datos completos de esos mangas
        this.db.fetchFirestoreCollection('manga').subscribe(mangas => {
          // Paso 4: filtramos solo los mangas cuyos ID están en favoritos
          this.mangasFavoritos = mangas.filter(m => this.favoritosIds.includes(m.id));
          console.log(this.mangasFavoritos)
        });
      });
    }
  }
}

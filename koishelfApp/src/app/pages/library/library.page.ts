import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';


@Component({ 
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: false
})
export class LibraryPage implements OnInit {
  favoritosIds: string[] = []; // IDs de favoritos
  heartIds: string[] = [];     // IDs de "heart"

  mangasFavoritos: any[] = []; // Detalles de mangas en favoritos
  mangasHeart: any[] = [];    // Detalles de mangas en "heart"

  segmentValue: string = 'favoritos';

  constructor(private db: DatabaseService, private router: Router) { }

  goToMangaDetail(mangaId: string) {
  this.router.navigate(['/manga-detail', mangaId]);
}


  ngOnInit(): void {
    const profile = localStorage.getItem('profile');
    const userId = profile ? JSON.parse(profile).id : '';
    if (userId) {
      this.db.getDocumentById('users', userId).subscribe(userDoc => {
        this.favoritosIds = userDoc?.library || []; // IDs de Favoritos
        this.heartIds = userDoc?.heartLibrary || []; // IDs de Heart

        this.db.fetchFirestoreCollection('manga').subscribe(mangas => {
          this.mangasFavoritos = mangas.filter(m => this.favoritosIds.includes(m.id)); // Filtra Favoritos
          this.mangasHeart = mangas.filter(m => this.heartIds.includes(m.id)); // Filtra Heart
        });

      });
    }
  }
}


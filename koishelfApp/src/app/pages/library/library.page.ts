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
  favoritosIds: string[] = [];
  heartIds: string[] = [];

  mangasFavoritos: any[] = [];
  mangasHeart: any[] = [];

  filteredMangas: any[] = [];

  segmentValue: string = 'favoritos';
  searchTerm: string = '';

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    const profile = localStorage.getItem('profile');
    const userId = profile ? JSON.parse(profile).id : '';

    if (userId) {
      this.db.getDocumentById('users', userId).subscribe(userDoc => {
        this.favoritosIds = userDoc?.library || [];
        this.heartIds = userDoc?.heartLibrary || [];

        this.db.fetchFirestoreCollection('manga').subscribe(mangas => {
          this.mangasFavoritos = mangas.filter(m => this.favoritosIds.includes(m.id));
          this.mangasHeart = mangas.filter(m => this.heartIds.includes(m.id));
          this.filterMangas(); // Llamamos para mostrar al inicio
        });
      });
    }
  }

  onSearchInput(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filterMangas();
  }

  filterMangas() {
    const source = this.segmentValue === 'favoritos' ? this.mangasFavoritos : this.mangasHeart;
    this.filteredMangas = source.filter(manga =>
      manga.id.toLowerCase().includes(this.searchTerm)
    );
  }

  segmentChanged() {
    this.filterMangas(); // actualizar al cambiar segmento
  }

  goToMangaDetail(mangaId: string) {
    this.router.navigate(['/manga-detail', mangaId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.page.html',
  styleUrls: ['./manga-detail.page.scss'],
  standalone: false,
})
export class MangaDetailPage implements OnInit {
  manga: any = {};
  chapters: any[] = [];
  puntuacionDelUsuario: number = 3;
  tags: string[] = [];  // <-- Nuevo array para géneros + demografía

  constructor(
    private router: ActivatedRoute,
    public db: DatabaseService
  ) {}

  ngOnInit() {
    const mangaId = this.router.snapshot.paramMap.get('mangaId');
    if (mangaId) {
      this.db.getDocumentById('manga', mangaId).subscribe((res: any) => {
        this.manga = res;
        console.log('Manga cargado desde Firebase:', this.manga);

        // Construir array de tags con géneros y demografía
        this.tags = [];

        if (this.manga.genre_demographic) {
          if (this.manga.genre_demographic.genres?.length) {
            this.tags.push(...this.manga.genre_demographic.genres);
          }
          if (this.manga.genre_demographic.demographic) {
            this.tags.push(this.manga.genre_demographic.demographic);
          }
        }
      });
    }

    // Lista fija de capítulos
    this.chapters = [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
      { number: 12 },
      { number: 13 },
      { number: 14 },
      { number: 15 },
      { number: 16 },
      { number: 17 },
      { number: 18 },
      { number: 19 },
      { number: 20 },
    ];
  }
  
  openChapter(number: number) {
    console.log('Capítulo abierto:', number);
    // Puedes implementar navegación aquí
  }
}

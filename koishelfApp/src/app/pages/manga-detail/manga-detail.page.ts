import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.page.html',
  styleUrls: ['./manga-detail.page.scss'],
  standalone: false,
})
export class MangaDetailPage implements OnInit {
  manga: any;
  chapters: any[] = [];

  constructor() { }

  ngOnInit() {
    this.manga = {
      title: 'Fullmetal Alchemist',
      author: 'Hiromu Arakawa',
      rating: 5,
      genres: ['Shonen', 'Fantasía', 'Acción', 'Filosofico'],
    };

     this.chapters = [
      { number: 1, title: 'Fosfofilita' },
      { number: 2, title: 'Cinabrio' },
      { number: 3, title: 'Diamante' },
      { number: 4, title: 'Diamante' },
      { number: 5, title: 'Metamorfosis' },
      { number: 6, title: 'Extraccion' },
    ];

  }
  puntuacionDelUsuario: number = 3;
  openChapter(number: number) {
  console.log('Capítulo abierto:', number);
  // Aquí podrías navegar a una página de lectura, por ejemplo:
  // this.router.navigate(['/read', number]);
}


}

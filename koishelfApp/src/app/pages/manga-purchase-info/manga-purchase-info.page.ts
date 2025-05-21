import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-purchase-info',
  templateUrl: './manga-purchase-info.page.html',
  styleUrls: ['./manga-purchase-info.page.scss'],
  standalone: false,
})
export class MangaPurchaseInfoPage implements OnInit {
   manga = {
    title: 'Haikyuu! 01',
    author: 'Haruichi Furudate',
    price: 9.14,
    synopsis: `Shoyo Hinata is out to prove that in volleyball you don't need to be tall to fly!`,
    image: 'assets/manga-cover/fma.jpg',
    pages: 129,
    language: 'Inglés',
    publisher: 'Viz Media',
    volume: 'Volumen 1',
    format: 'Tamaño tankoubon con sobrecubierta',
    rating: "3",
    similar: [
      'assets/mangas/haikyuu02.jpg',
      'assets/mangas/haikyuu22.jpg',
      'assets/mangas/haikyuu03.jpg',
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  puntuacionDelUsuario: number = 3;

}

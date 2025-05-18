import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  slideOpts = {
  slidesPerView: 3.2,
  spaceBetween: 10,
  direction: 'horizontal', // asegura que sea horizontal
  freeMode: true
};

nuevosLanzamientos = [
  { imagen: 'assets/news/shoyo1.jpg', titulo: 'Jujutsu Kaisen' },
  { imagen: 'assets/manga-cover/sakamoto.jpg', titulo: 'Sakamoto Days' },
  { imagen: 'assets/manga-cover/chainsaw.jpg', titulo: 'Chainsaw Man' },
  { imagen: 'assets/manga-cover/chainsaw.jpg', titulo: 'Chainsaw Man' },
  { imagen: 'assets/manga-cover/chainsaw.jpg', titulo: 'Chainsaw Man' },
  // agrega más
  // agrega más
  // agrega más
];

similaresAHaikyuu = [
  { imagen: 'assets/manga-cover/slamdunk.jpg', titulo: 'Slam Dunk' },
  { imagen: 'assets/manga-cover/crimson.jpg', titulo: 'Crimson Hero' },
  // agrega más
];

  constructor() {}

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangateca',
  templateUrl: './mangateca.page.html',
  styleUrls: ['./mangateca.page.scss'],
  standalone: false
})
export class MangatecaPage implements OnInit {

  mangas = [
    {
      titulo: 'Haikyuu!!',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 1,
      estado: 'Completada!'
    },
    {
      titulo: 'Yu Yu Hakusho',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 0.4,
      estado: 'Te faltan 6 tomos'
    },
    {
      titulo: 'Boy meets Maria',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 1,
      estado: 'Tomo Único'
    },
    {
      titulo: 'Neon Genesis Evangelion',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 0.6,
      estado: 'Te faltan 3 tomos'
    },
    {
      titulo: 'Oyasumin Punpun',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 0.1,
      estado: 'Te faltan varios tomos'
    },
    {
      titulo: 'Oyasumin Punpun',
      imagen: 'assets/manga-cover/fma.jpg',
      progreso: 0.1,
      estado: 'Te faltan varios tomos'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

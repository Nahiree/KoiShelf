import { Component } from '@angular/core';

@Component({
  selector: 'app-mangateca-edicion',
  templateUrl: './mangateca-edicion.page.html',
  styleUrls: ['./mangateca-edicion.page.scss'],
  standalone: false
})
export class MangatecaEdicionPage {
  segment: string = 'info';
  portadaUrl: string = 'assets/haikyuu/hqbanner.jpg'; // cambia según tu imagen
  titulo: string = 'Haikyuu!!';

  otrasEdiciones = [
  {
    portada: 'assets/haikyuu/ivrea.jpg',
    titulo: 'Haikyuu!!',
    editorial: 'IVREA'
  },
  {
    portada: 'assets/haikyuu/pc.jpg',
    titulo: 'Haikyuu!!',
    editorial: 'Planeta Cómic'
  }
];

  tomos = [
    { numero: 1, tengo: true, imagen: 'assets/haikyuu/1.jpeg' },
    { numero: 2, tengo: true, imagen: 'assets/haikyuu/2.png' },
    { numero: 3, tengo: true, imagen: 'assets/haikyuu/3.png' },
    { numero: 4, tengo: true, imagen: 'assets/haikyuu/4.png' },
    { numero: 5, tengo: true, imagen: 'assets/haikyuu/5.png' },
    { numero: 6, tengo: true, imagen: 'assets/haikyuu/6.png' },
    { numero: 7, tengo: true, imagen: 'assets/haikyuu/7.png' },
    { numero: 8, tengo: true, imagen: 'assets/haikyuu/8.png' },
    { numero: 9, tengo: true, imagen: 'assets/haikyuu/9.png' },
    { numero: 10, tengo: true, imagen: 'assets/haikyuu/10.png' },
    { numero: 11, tengo: true, imagen: 'assets/haikyuu/11.png' },
    { numero: 12, tengo: true, imagen: 'assets/haikyuu/12.png' },
    { numero: 13, tengo: true, imagen: 'assets/haikyuu/13.png' },
    { numero: 14, tengo: true, imagen: 'assets/haikyuu/14.png' },
    { numero: 15, tengo: true, imagen: 'assets/haikyuu/15.png' },
    { numero: 16, tengo: true, imagen: 'assets/haikyuu/16.png' },
    { numero: 17, tengo: true, imagen: 'assets/haikyuu/17.png' },
    { numero: 18, tengo: true, imagen: 'assets/haikyuu/18.png' },
    { numero: 19, tengo: true, imagen: 'assets/haikyuu/19.png' },
    { numero: 20, tengo: true, imagen: 'assets/haikyuu/20.png' },
    { numero: 21, tengo: true, imagen: 'assets/haikyuu/21.png' },
    { numero: 22, tengo: true, imagen: 'assets/haikyuu/22.png' },
    { numero: 23, tengo: true, imagen: 'assets/haikyuu/23.png' },
    { numero: 24, tengo: true, imagen: 'assets/haikyuu/24.png' },
    { numero: 25, tengo: true, imagen: 'assets/haikyuu/25.png' },
    { numero: 26, tengo: true, imagen: 'assets/haikyuu/26.png' },
    { numero: 27, tengo: true, imagen: 'assets/haikyuu/27.png' },
    { numero: 28, tengo: true, imagen: 'assets/haikyuu/28.png' },
    { numero: 29, tengo: true, imagen: 'assets/haikyuu/29.png' },
    { numero: 30, tengo: true, imagen: 'assets/haikyuu/30.png' },
    { numero: 31, tengo: true, imagen: 'assets/haikyuu/31.png' },
    { numero: 32, tengo: true, imagen: 'assets/haikyuu/32.png' },
    { numero: 33, tengo: true, imagen: 'assets/haikyuu/33.png' },
    { numero: 34, tengo: true, imagen: 'assets/haikyuu/34.png' },
    { numero: 35, tengo: true, imagen: 'assets/haikyuu/35.png' },
    { numero: 36, tengo: true, imagen: 'assets/haikyuu/36.png' },
    { numero: 37, tengo: true, imagen: 'assets/haikyuu/37.png' },
    { numero: 38, tengo: true, imagen: 'assets/haikyuu/38.png' },
    { numero: 39, tengo: true, imagen: 'assets/haikyuu/39.png' },
    { numero: 40, tengo: true, imagen: 'assets/haikyuu/40.png' },
    { numero: 41, tengo: true, imagen: 'assets/haikyuu/41.png' },
    { numero: 42, tengo: true, imagen: 'assets/haikyuu/42.jpg' },
    { numero: 43, tengo: true, imagen: 'assets/haikyuu/43.png' },
    { numero: 44, tengo: true, imagen: 'assets/haikyuu/44.png' },
    { numero: 45, tengo: true, imagen: 'assets/haikyuu/45.jpg' },
  ];

  get tomosTengo() {
    return this.tomos.filter(t => t.tengo);
  }

  get tomosFaltan() {
    return this.tomos.filter(t => !t.tengo);
  }

  getPorcentajeTengo(): number {
    return this.tomos.length ? this.tomosTengo.length / this.tomos.length : 0;
  }

  getPorcentajeFaltan(): number {
    return this.tomos.length ? this.tomosFaltan.length / this.tomos.length : 0;
  }

  toggleTomo(tomo: any) {
    tomo.tengo = !tomo.tengo;
  }
}

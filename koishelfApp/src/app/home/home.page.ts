import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  secciones = [
   {
    titulo: 'Nuevos Lanzamientos',
    ids: ['Lovely Complex', 'Marmalade Boy','One Piece', 'Paradise Kiss', 'Pluto', 'Ranma 1-2', 'Skip Beat!',  'Utena: La chica revolucionaria', ]
  },

  {
    titulo: 'Porque viste Haikyuu!!',
    generos: ['Deportes', 'Comedia']
  },
  {
    titulo: 'Mundos fantásticos para escapar',
    genero: 'Fantasía'
  },
  
  {
    titulo: 'Acción sin límites',
    genero: 'Acción'
  },
  {
    titulo: 'Romance que te atrapará',
    genero: 'Romance'
  },
  {
    titulo: 'Misterios que te van a obsesionar',
    genero: 'Misterio'
  },
  {
  titulo: 'Shōnen que no te puedes perder',
  demographic: 'Shonen'
  },
  {
    titulo: 'BL con emociones intensas',
    genero: 'BL'
  },
  {
    titulo: 'Slice of life con corazón',
    genero: 'Slice of Life'
  },
  
  
  {
    titulo: 'Fantasía oscura y mundos rotos',
    genero: 'Fantasía Oscura'
  },
  {
    titulo: 'Dramas que se sienten reales',
    genero: 'Drama'
  },
  {
    titulo: 'Terror que se mete en tu cabeza',
    generos: ['Horror', 'Terror']
  },
  {
    titulo: 'Aventuras que te sacan del mundo',
    genero: 'Aventura'
  },
  {
    titulo: 'Historias del pasado que sorprenden',
    genero: 'Histórico'
  },

];
mangasPorGenero: { [titulo: string]: string[] } = {};

ngOnInit() {
  this.db.fetchFirestoreCollection('manga').subscribe((res: any[]) => {
    this.secciones.forEach((seccion) => {
      let ids: string[] = [];

      if (seccion.ids) {
        // Caso 1: usar directamente los IDs proporcionados
        ids = seccion.ids;
      } else if (seccion.generos) {
        // Caso 2: filtrar por géneros múltiples
        const filtrados = res.filter((manga) =>
          seccion.generos!.some((g: string) =>
            manga.genre_demographic?.genres?.includes(g)
          )
        );
        ids = filtrados.map((m) => m.id);
      } else if (seccion.genero) {
        // Caso 3: filtrar por un solo género
        const filtrados = res.filter((manga) =>
          manga.genre_demographic?.genres?.includes(seccion.genero!)
        );
        ids = filtrados.map((m) => m.id);
      } else if (seccion.demographic) {
        // ✅ Caso 4: filtrar por demographic
        const filtrados = res.filter((manga) =>
          manga.genre_demographic?.demographic === seccion.demographic
        );
        ids = filtrados.map((m) => m.id);
      }

      this.mangasPorGenero[seccion.titulo] = ids;
    });
  });
}





constructor(public db: DatabaseService) {}



 
}

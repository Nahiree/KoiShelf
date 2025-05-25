import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
  standalone: false,
})
export class SectionPage implements OnInit {

  mangas: any[] = [];
  allMangas: any[] = [];
  searchText: string = '';
  titulo: string = '';

  constructor(
    private route: ActivatedRoute,
    public db: DatabaseService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'] || 'Sección';
      this.fetchMangasSegunTitulo(this.titulo);
    });
  }

  fetchMangasSegunTitulo(titulo: string) {
    this.db.fetchFirestoreCollection('manga').subscribe((res: any[]) => {
      this.allMangas = res;
      const seccion = this.getSeccionPorTitulo(titulo);

      if (!seccion) {
        this.mangas = [];
        return;
      }

      if (seccion.ids) {
        this.mangas = res.filter(m => seccion.ids.includes(m.id));
      } else if (seccion.generos) {
        this.mangas = res.filter(m =>
          seccion.generos.some((g: string) =>
            m.genre_demographic?.genres?.includes(g)
          )
        );
      } else if (seccion.genero) {
        this.mangas = res.filter(m =>
          m.genre_demographic?.genres?.includes(seccion.genero)
        );
      } else if (seccion.demographic) {
        this.mangas = res.filter(m =>
          m.genre_demographic?.demographic === seccion.demographic
        );
      } else {
        this.mangas = [...res]; // Por si acaso
      }
    });
  }

  getSeccionPorTitulo(titulo: string) {
    
    const secciones = [
      {
        titulo: 'Nuevos Lanzamientos',
        ids: ['One Piece', 'Paradise Kiss', 'Pluto', 'Skip Beat!', 'Lovely Complex', 'Marmalade Boy', 'Utena: La chica revolucionaria', 'Ranma 1-2']
      },
      { titulo: 'Porque viste Haikyuu!!', generos: ['Deportes', 'Comedia'] },
      { titulo: 'Mundos fantásticos para escapar', genero: 'Fantasía' },
      { titulo: 'Acción sin límites', genero: 'Acción' },
      { titulo: 'Romance que te atrapará', genero: 'Romance' },
      { titulo: 'Misterios que te van a obsesionar', genero: 'Misterio' },
      { titulo: 'Shōnen que no te puedes perder', demographic: 'Shonen' },
      { titulo: 'BL con emociones intensas', genero: 'BL' },
      { titulo: 'Slice of life con corazón', genero: 'Slice of Life' },
      { titulo: 'Fantasía oscura y mundos rotos', genero: 'Fantasía Oscura' },
      { titulo: 'Dramas que se sienten reales', genero: 'Drama' },
      { titulo: 'Terror que se mete en tu cabeza', generos: ['Horror', 'Terror'] },
      { titulo: 'Aventuras que te sacan del mundo', genero: 'Aventura' },
      { titulo: 'Historias del pasado que sorprenden', genero: 'Histórico' },
    ];

    return secciones.find(s => s.titulo === titulo);
  }

  handleSearch(event: any) {
    const query = event.target.value?.toLowerCase().trim() || '';
    if (query === '') {
      this.mangas = [...this.allMangas];
    } else {
      this.mangas = this.allMangas.filter(manga =>
        manga.id.toLowerCase().includes(query)
      );
    }
  }

}

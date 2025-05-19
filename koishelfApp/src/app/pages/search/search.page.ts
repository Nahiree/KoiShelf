import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {

  mangas: any[] = []; // lo que se muestra
  allMangas: any[] = []; // respaldo completo
  searchText: string = '';

  constructor(
    public db: DatabaseService //Pedir acceso a la base de datos.
  ) { 
    this.fetchMangas(); //Llamar a la función, utilizamos this. para llamar algo de la misma función
  }

  ngOnInit() {
  }


  fetchMangas() {
  this.db.fetchFirestoreCollection('manga')
    .subscribe((res: any[]) => {
      console.log('Mangas Collection: ', res);
      this.allMangas = res;      // Guardamos todos
      this.mangas = [...res];    // Mostramos inicialmente todos
    });
}

  filterMangas() {
    const query = this.searchText.trim().toLowerCase();
    if (query === '') {
      this.mangas = this.allMangas;
    } else {
      this.mangas = this.allMangas.filter(manga =>
        manga.id.toLowerCase().includes(query)
      );
    }
  }
  handleSearch(event: any) {
  const query = event.target.value?.toLowerCase().trim() || '';

  if (query === '') {
    // Si el campo está vacío, mostrar todos
    this.mangas = [...this.allMangas];
  } else {
    // Si hay texto, filtrar los mangas cuyo ID contenga el texto
    this.mangas = this.allMangas.filter(manga =>
      manga.id.toLowerCase().includes(query)
    );
  }
}

}

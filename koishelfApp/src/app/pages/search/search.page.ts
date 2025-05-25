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
 selectedGenres: Set<string> = new Set();
selectedDemographics: Set<string> = new Set();


  ngOnInit() {
  }

  toggleGenre(event: any) {
  const genre = event.target.value;

  if (event.detail.checked) {
    this.selectedGenres.add(genre);
  } else {
    this.selectedGenres.delete(genre);
  }

  this.applyFilters(); // Aplica todos los filtros (texto + género)
}

toggleDemographic(event: any) {
  const demographic = event.target.value;

  if (event.detail.checked) {
    this.selectedDemographics.add(demographic);
  } else {
    this.selectedDemographics.delete(demographic);
  }

  this.applyFilters();
}


  fetchMangas() {
  this.db.fetchFirestoreCollection('manga')
    .subscribe((res: any[]) => {
      console.log('Mangas Collection: ', res);
      this.allMangas = res;      // Guardamos todos
      this.mangas = [...res];    // Mostramos inicialmente todos
    });
}

 applyFilters() {
  const query = this.searchText.trim().toLowerCase();

  this.mangas = this.allMangas.filter(manga => {
    const matchesText = manga.id.toLowerCase().includes(query);

    const genres = manga.genre_demographic?.genres || [];
    const demographic = manga.genre_demographic?.demographic || '';

    const matchesGenre =
      this.selectedGenres.size === 0 ||
      [...this.selectedGenres].some(g => genres.includes(g));

    const matchesDemographic =
      this.selectedDemographics.size === 0 ||
      this.selectedDemographics.has(demographic);

    return matchesText && matchesGenre && matchesDemographic;
  });
}


 handleSearch(event: any) {
  this.searchText = event.target.value?.toLowerCase().trim() || '';
  this.applyFilters();
}


}

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: false
})
export class LibraryPage implements OnInit {
  segmentValue: string = 'terminados';
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

 
  }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.page.html',
  styleUrls: ['./synopsis.page.scss'],
  standalone: false,
})
export class SynopsisPage implements OnInit {
   id: any; //variable para recibir el id
  data: any; //variable para recibir toda la información del id
  allMangas: any[] = []; // Todos los mangas de la base
  similarMangas: any[] = []; // Mangas similares filtrados
  suggestedMangas: any[] = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public db: DatabaseService,
    //public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('mangaID', this.activatedRoute.snapshot.paramMap.get('mangaId'));
    this.id = this.activatedRoute.snapshot.paramMap.get('mangaId');
    this.db.getDocumentById('manga', this.id)
      .subscribe((res: any) => {
        console.log('manga recuperado', res);
        this.data = res;
       //this.cdr.detectChanges();
        console.log('genre array:', this.data.genre_demographic.genres);
       console.log('genre array:', this.data.genre_demographic.demographic);
       if(this.data?.genre_demographic?.genres && Array.isArray(this.data.genre_demographic.genres)) {
          console.log('Array demographic:', this.data.genre_demographic.genres);
        } else {
  console.log('No está definido o no es un array');
}
    if (this.data.genre_demographic) {
        const filters:  any[] = [
          { field: 'genre_demographic.demographic', operator: '==', value: this.data.genre_demographic.demographic },
          
        ];

        this.db.getCollectionByFilters('manga', filters).subscribe(results => {
          this.suggestedMangas = results.filter(m => m.id !== this.id);
          console.log('similares array:', this.suggestedMangas );
        });
      }
       
      })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone:false
})
export class StorePage implements OnInit {

  mangas: any[] = [];
  searchText: string = '';
  constructor(
    public db: DatabaseService //Pedir acceso a la base de datos.
  ) { 
    this.fetchMangas(); //Llamar a la función, utilizamos this. para llamar algo de la misma función
  }

  ngOnInit() {
  }

  mostrarMensaje() {
    alert("¡Hola! Este es un mensaje.");
  }

  handleSearch(event: any) {
    const query = event.target.value?.toLowerCase().trim() || '';

    this.db.fetchFirestoreCollection('manga').subscribe((res: any[]) => {
      this.mangas = res.filter(manga =>
        manga.id?.toLowerCase().includes(query)
      );
    });
  }
  fetchMangas(){
    this.db.fetchFirestoreCollection('manga')
    .subscribe((res: any) => {
      console.log('Mangas Collection: ', res);
      this.mangas = res;
    })
  }
}

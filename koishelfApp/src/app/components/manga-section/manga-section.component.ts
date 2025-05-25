import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manga-section',
  templateUrl: './manga-section.component.html',
  styleUrls: ['./manga-section.component.scss'],
  standalone: false
})
export class MangaSectionComponent implements OnInit {
  
 @Input() ids: string[] = [];
 @Input() filterByGenre: string | null = null;
@Input() filterByDemographic: string | null = null;


  mangas:any;

  constructor(
    public db: DatabaseService, private router: Router
  ) { 
    this.fetchMangas();
  }

  ngOnInit() {
    this.fetchMangas();
  }

  mostrarMensaje() {
    alert("¡Hola! Este es un mensaje.");
  }


 fetchMangas() {
  this.db.fetchFirestoreCollection('manga')
    .subscribe((res: any[]) => {
      let filtrados = res;

      if (this.filterByGenre) {
        filtrados = filtrados.filter(manga =>
          manga.genre_demographic &&
          Array.isArray(manga.genre_demographic.genres) &&
          manga.genre_demographic.genres.includes(this.filterByGenre)
        );
      }

      if (this.filterByDemographic) {
        filtrados = filtrados.filter(manga =>
          manga.genre_demographic &&
          manga.genre_demographic.demographic === this.filterByDemographic
        );
      }

      this.mangas = this.ids.length > 0
        ? filtrados.filter(manga => this.ids.includes(manga.id))
        : filtrados;
    });
}
goToMangaDetail(mangaId: string) {
  this.router.navigate(['/manga-detail', mangaId]);
}

}

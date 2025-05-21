import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-manga-section',
  templateUrl: './manga-section.component.html',
  imports: [CommonModule, IonicModule],
  styleUrls: ['./manga-section.component.scss'],
  standalone: true
})
export class MangaSectionComponent implements OnInit {
  @Input() ids: string[] = [];

  mangas:any;

  constructor(
    public db: DatabaseService
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
      console.log('Mangas Collection: ', res);
      this.mangas = res.filter(manga => this.ids.includes(manga.id));
    });
  }
}

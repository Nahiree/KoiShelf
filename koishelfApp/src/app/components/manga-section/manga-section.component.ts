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

  mangas:any; //declara el nombre y el tipo de variable, en este caso any por que no sabemos lo que recibiremos.

  constructor(
    public db: DatabaseService //Pedir acceso a la base de datos.
  ) { 
    this.fetchMangas(); //Llamar a la función, utilizamos this. para llamar algo de la misma función
  }

  ngOnInit() {
    this.fetchMangas(); //Llamar a la función, utilizamos this. para llamar algo de la misma función
  }

  mostrarMensaje() {
    alert("¡Hola! Este es un mensaje.");
  }


  fetchMangas() {
  this.db.fetchFirestoreCollection('manga')
    .subscribe((res: any[]) => {
      console.log('Mangas Collection: ', res);
      // Filtra solo los que están en this.ids
      this.mangas = res.filter(manga => this.ids.includes(manga.id));
    });
  }
}

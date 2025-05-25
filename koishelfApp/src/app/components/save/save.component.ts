import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
  standalone: false,
})
export class SaveComponent implements OnInit {
  mangaId: string = '';
  userId: string = '';
  filled: boolean = false;

  constructor(
    public route: ActivatedRoute,
     private db: DatabaseService,
    public firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    // Obtener ID del manga desde la URL
    this.mangaId = this.route.snapshot.paramMap.get('mangaId') || '';

    // Obtener ID del usuario desde localStorage
    const profile = localStorage.getItem('profile');
    this.userId = profile ? JSON.parse(profile).id : '';

    console.log('Manga ID:', this.mangaId);
    console.log('User ID:', this.userId);
  }

  toggle() {
    this.filled = !this.filled;
    if (this.filled) {
      this.agregarAFavoritos();
    } else {
      this.removerDeFavoritos(); // opcional
    }
  }

  async agregarAFavoritos() {
    if (!this.userId || !this.mangaId) {
      console.error(' Faltan datos para guardar el favorito');
      return;
    }

    try {
      // Aquí construimos el objeto correcto para actualizar el array
      const data = {
        library: firebase.firestore.FieldValue.arrayUnion(this.mangaId),
      };
      await this.db.updateFireStoreDocument('users', this.userId, data);
      console.log('✅ Manga agregado a favoritos');
    } catch (error) {
      console.error('❌ Error al guardar favorito:', error);
    }
  }

  async removerDeFavoritos() {
    if (!this.userId || !this.mangaId) {
      console.error('❌ Faltan datos para eliminar de favoritos');
      return;
    }

    try {
      await this.firestore.collection('users').doc(this.userId).update({
        favoritos: firebase.firestore.FieldValue.arrayRemove(this.mangaId),
      });
      console.log('✅ Manga eliminado de favoritos');
    } catch (error) {
      console.error('❌ Error al eliminar favorito:', error);
    }
  }
}

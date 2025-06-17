import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Component({ 
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
  standalone: false
})
export class HeartComponent implements OnInit {
  filled = false;
  mangaId!: string;
  userId!: string;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private firestore: AngularFirestore
  ) { }

  async ngOnInit() {
    this.mangaId = this.route.snapshot.paramMap.get('mangaId') || '';
    const profile = localStorage.getItem('profile');
    this.userId = profile ? JSON.parse(profile).id : '';
    console.log('Manga ID (heart):', this.mangaId);
    console.log('User ID (heart):', this.userId);

    if (this.userId && this.mangaId) {
      await this.checkIfHearted();
    }
  }

  async checkIfHearted() {
    try {
      const user = await this.db.getDocumentById('users', this.userId).toPromise();
      this.filled = user?.heartLibrary?.includes(this.mangaId);
      console.log('¿Está en Heart?', this.filled);
    } catch (error) {
      console.error('Error al verificar Heart!', error);
    }
  }

  async toggle() {
    this.filled = !this.filled;

    if (this.filled) {
      await this.agregarAHeart();
    } else {
      await this.removerDeHeart();
    }
  }

  async agregarAHeart() {
    if (!this.userId || !this.mangaId) {
      console.error(' Faltan datos para guardar en Heart');
      return;
    }
    try {
      const data = {
        heartLibrary: firebase.firestore.FieldValue.arrayUnion(this.mangaId),
      };
      await this.db.updateFireStoreDocument('users', this.userId, data);
      console.log('✅ Manga agregado a Heart');
    } catch (error) {
      console.error('❌ Error al guardar en Heart!', error);
    }
  }

  async removerDeHeart() {
    if (!this.userId || !this.mangaId) {
      console.error('❌ Faltan datos para eliminar de Heart');
      return;
    }
    try {
      await this.firestore.collection('users').doc(this.userId).update({ 
        heartLibrary: firebase.firestore.FieldValue.arrayRemove(this.mangaId) 
      });
      console.log('✅ Manga removido de Heart');
    } catch (error) {
      console.error('❌ Error al eliminar de Heart!', error);
    }
  }
}


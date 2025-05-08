import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private db: DatabaseService) {
    this.checkConnection();
  }

  checkConnection() {
    this.db.fetchFirestoreCollection('manga').subscribe({
      next: data => console.log('✅ Conexión exitosa. Datos:', data),
      error: err => console.error('❌ Error al conectar a Firestore:', err)
    });
  }
}

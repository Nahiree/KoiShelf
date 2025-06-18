import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service'; 
import { SplashScreen } from '@capacitor/splash-screen';
import { PushupnotificationsService } from './services/pushupnotifications.service';
import { AuthService } from './services/auth.service'; // ✅ IMPORTANTE
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private db: DatabaseService,
    private pushService: PushupnotificationsService,
    private auth: AuthService ,// ✅ INYECTADO,
    private platform: Platform,
    private router: Router,
  ) {
    this.checkConnection();
    this.showSplash();
    this.initPushNotifications();
    this.initializeApp();
  }

  

  checkConnection() {
    this.db.fetchFirestoreCollection('manga').subscribe({
      next: data => console.log('✅ Conexión exitosa. Datos:', data),
      error: err => console.error('❌ Error al conectar a Firestore:', err)
    });
  }

  async showSplash() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });
  }

  initPushNotifications() {
    this.pushService.initPushnots(); 
  }

  initializeApp() {
  this.platform.ready().then(() => {
    // Aquí podrías consultar si el usuario ya está logueado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  });
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.page.html',
  styleUrls: ['./credit-card.page.scss'],
  standalone: false,
})
export class CreditCardPage implements OnInit {
  cardHolder = '';
  cardNumber = '';
  expiration = '';
  cvs = '';
  total = 0;
  purchasedMangas: any[] = [];

  invalid = {
    cardNumber: false,
    expiration: false,
    cvs: false
  };

  constructor(
    private toastController: ToastController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.total = Number(this.route.snapshot.queryParamMap.get('total')) || 0;

    const purchased = this.route.snapshot.queryParamMap.get('mangas');
    if (purchased) {
      this.purchasedMangas = JSON.parse(purchased);
    }
  }

  validateNumber(field: 'cardNumber' | 'expiration' | 'cvs', isDate: boolean = false) {
    const value = this[field];
    const regex = isDate ? /^[0-9\/]*$/ : /^[0-9]*$/;
    this.invalid[field] = !regex.test(value);
  }

  isFormValid(): boolean {
    const isExpirationValid = /^[0-9]{2}\/[0-9]{2}$/.test(this.expiration.trim());
    return (
      this.cardHolder.trim() !== '' &&
      this.cardNumber.trim().length === 16 &&
      !this.invalid.cardNumber &&
      isExpirationValid &&
      !this.invalid.expiration &&
      this.cvs.trim().length >= 3 &&
      !this.invalid.cvs
    );
  }

  async submitPayment() {
    if (!this.isFormValid()) return;

    // Obtener mangas ya comprados
    const currentLibrary = JSON.parse(localStorage.getItem('purchasedMangas') || '[]');

    // Agregar nuevos evitando duplicados
    const updatedLibrary = [...currentLibrary];
    this.purchasedMangas.forEach(manga => {
      if (!updatedLibrary.find((m: any) => m.id === manga.id)) {
        updatedLibrary.push(manga);
      }
    });

    // Guardar en localStorage
    localStorage.setItem('purchasedMangas', JSON.stringify(updatedLibrary));

    // Mostrar mensaje
    const toast = await this.toastController.create({
      message: '¡Compra exitosa!',
      duration: 2000,
      color: 'success',
      position: 'middle',
      cssClass: 'custom-toast'
    });

    await toast.present();

    // Redirigir
    setTimeout(() => {
      this.router.navigate(['/store']);
    }, 2000);
  }
}

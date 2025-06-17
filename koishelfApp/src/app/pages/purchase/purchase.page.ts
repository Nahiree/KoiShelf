import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
  standalone: false
})
export class PurchasePage implements OnInit {
  manga: any = null;
  quantity = 1;
  shippingCost = 23.45;

  postalCode = '';
  couponCode = '';

  invalid = {
    postalCode: false,
    couponCode: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router, // 👈 NUEVO
    private db: DatabaseService
  ) {}

  ngOnInit() {
    const mangaId = this.route.snapshot.paramMap.get('id');
    if (mangaId) {
      this.db.fetchFirestoreCollection('manga').subscribe((mangas) => {
        this.manga = mangas.find((m) => m.id === mangaId);
      });
    }
  }

  validateNumber(field: keyof typeof this.invalid, isDate: boolean = false): void {
    const value = this[field];
    const regex = isDate ? /^[0-9\/]*$/ : /^[0-9]*$/; // 👈 corregido el regex con barra escapada
    this.invalid[field] = !regex.test(value);
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  removeManga(): void {
    this.quantity = 1;
  }

  get subtotal(): number {
    return this.manga ? this.manga.price * this.quantity : 0;
  }

  get total(): number {
    return this.manga ? this.subtotal + this.shippingCost : 0;
  }

  // ✅ NUEVO MÉTODO PARA PASAR LOS MANGAS COMPRADOS
  goToPayment(): void {
    if (!this.manga) return;

    const purchased = [{
      id: this.manga.id,
      titulo: this.manga.title,
      imagen: this.manga.cover,
      progreso: 0,
      estado: 'Sin leer'
    }];

    this.router.navigate(['/credit-card'], {
      queryParams: {
        total: this.total,
        mangas: JSON.stringify(purchased)
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
  standalone: false,
})
export class PurchasePage implements OnInit {
    product = {
    title: 'Sakura Cardcaptor',
    edition: 'Edición Deluxe 09',
    price: 12900,
    quantity: 1,
    image: 'assets/manga-cover/fma.jpg',
    };
 
  constructor() { }

  ngOnInit() {
  }

   shippingCost = 5900;

  get subtotal(): number {
    return this.product.price * this.product.quantity;
  }

  get total(): number {
    return this.subtotal + this.shippingCost;
  }

  increaseQuantity(): void {
    this.product.quantity++;
  }

  decreaseQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
  standalone: false,
})
export class PurchasePage implements OnInit {
    product = {
    title: 'Haikyu! 01',
    edition: 'Viz Media Edition',
    price: 9.14,
    quantity: 1,
    image: 'assets/manga-cover/fma.jpg',
    visible: true,
    };

    postalCode = '';
    couponCode = '';

    invalid = {
      postalCode: false,
      couponCode: false
    };

  validateNumber(field: keyof typeof this.invalid, isDate: boolean = false): void {
    const value = this[field];
    const regex = isDate ? /^[0-9/]*$/ : /^[0-9]*$/;

    this.invalid[field] = !regex.test(value);
  }
 
  constructor() { }

  ngOnInit() {
  }

  shippingCost = 23.45;

  get subtotal(): number {
    return this.product.visible ? this.product.price * this.product.quantity : 0;
  }

  get total(): number {
    return this.product.visible ? this.subtotal + this.shippingCost : 0;
  }

  increaseQuantity(): void {
    this.product.quantity++;
  }

  decreaseQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }

  removeProduct(): void {
  this.product.visible = false;
  }

}

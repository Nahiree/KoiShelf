import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  invalid = {
  cardNumber: false,
  expiration: false,
  cvs: false
};

validateNumber(field: 'cardNumber' | 'expiration' | 'cvs', isDate: boolean = false) {
  const value = this[field];
  const regex = isDate ? /^[0-9/]*$/ : /^[0-9]*$/;

  this.invalid[field] = !regex.test(value);
}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.total = Number(this.route.snapshot.queryParamMap.get('total')) || 0;
  }

   submitPayment() {
    console.log('Datos de tarjeta:', {
      cardHolder: this.cardHolder,
      cardNumber: this.cardNumber,
      expiration: this.expiration,
      cvs: this.cvs,
    });
    console.log('Monto pagado:', this.total)
   }
}

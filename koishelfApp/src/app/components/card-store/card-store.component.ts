import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss'],
  standalone:false
})
export class CardStoreComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  puntuacionDelUsuario: number = 3;

}

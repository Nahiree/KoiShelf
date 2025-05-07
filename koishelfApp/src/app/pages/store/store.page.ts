import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone:false
})
export class StorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje() {
    alert("¡Hola! Este es un mensaje.");
  }

  puntuacionDelUsuario: number = 3;
}

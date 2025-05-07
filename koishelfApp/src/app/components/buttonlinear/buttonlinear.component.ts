import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-buttonlinear',
  templateUrl: './buttonlinear.component.html',
  styleUrls: ['./buttonlinear.component.scss'],
  standalone:false
})
export class ButtonlinearComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() label: string = '';  // El texto que debe mostrar el botón
  @Input() action: Function = () => {};  // La acción que debe ejecutar el botón
  @Input() color: string = '';

  onClick() {
    this.action();  // Llama a la acción cuando se hace clic
  }
}

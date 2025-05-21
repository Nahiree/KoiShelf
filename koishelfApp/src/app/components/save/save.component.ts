import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
  standalone: false,
})
export class SaveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  filled = false;
  
  toggle() {
    this.filled = !this.filled;
    console.log('Filled ahora:', this.filled);
  }

}

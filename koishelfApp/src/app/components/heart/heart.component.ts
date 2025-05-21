import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
  standalone: false
})
export class HeartComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  filled = false;

  toggle() {
    this.filled = !this.filled;
    console.log('Filled ahora:', this.filled);
  }
}

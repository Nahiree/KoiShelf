import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
})
export class HeartComponent implements OnInit {
  filled = false;

  toggle() {
    this.filled = !this.filled;
  }

  constructor() { }

  ngOnInit() {}

}

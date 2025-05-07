import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone:false
})
export class RatingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  rate(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
    console.log('Estrella seleccionada:', star);
  }
}

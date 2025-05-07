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
  @Input() maxStars: number = 5;

  @Output() ratingChange = new EventEmitter<number>();

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }

  getStars(): number[] {
    return Array(this.maxStars).fill(0).map((_, i) => i);
  }
}

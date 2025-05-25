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

  
}

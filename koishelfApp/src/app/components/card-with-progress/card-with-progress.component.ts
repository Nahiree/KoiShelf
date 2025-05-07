import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-progress',
  templateUrl: './card-with-progress.component.html',
  styleUrls: ['./card-with-progress.component.scss'],
  standalone:false
})
export class CardWithProgressComponent  implements OnInit {

  progress: number = 0.5;

  constructor() { }

  ngOnInit() {}

}

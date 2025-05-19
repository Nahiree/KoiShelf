import { Component, OnInit } from '@angular/core';
import { IonChip, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  imports: [IonChip],
})
export class ChipComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }


}

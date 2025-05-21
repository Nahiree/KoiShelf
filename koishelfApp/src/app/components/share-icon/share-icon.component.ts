import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-icon',
  templateUrl: './share-icon.component.html',
  styleUrls: ['./share-icon.component.scss'],
  standalone: false,
})
export class ShareIconComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  filled = false;
  
  toggle() {
    this.filled = !this.filled;
    setTimeout(() => {this.filled = false;}, 5000);
  }
}

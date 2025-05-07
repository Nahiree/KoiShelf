import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:false,
})
export class MenuComponent  implements OnInit {

  selectedTab: string = 'home'; // Pestaña que estará activa al principio

  constructor() { }

  ngOnInit() {}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}



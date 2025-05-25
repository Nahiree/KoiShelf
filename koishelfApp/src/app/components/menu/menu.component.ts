import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:false,
})
export class MenuComponent  implements OnInit {

  selectedTab: string = ''; // Pestaña que estará activa al principio

   tabs = [
     { name: 'home', label: 'Inicio', icon: 'assets/icon/home.svg', activeIcon: 'assets/icon/home2.svg' },
     { name: 'store', label: 'Tienda', icon: 'assets/icon/tienda.svg', activeIcon: 'assets/icon/tienda2.svg' },
     { name: 'profile', label: 'Perfil', icon: 'assets/icon/perfil.svg', activeIcon: 'assets/icon/perfil2.svg' },
     { name: 'forum', label: 'Foro', icon: 'assets/icon/foro.svg', activeIcon: 'assets/icon/foro2.svg' },
     { name: '', label: 'Biblioteca', icon: 'assets/icon/library.svg', activeIcon: 'assets/icon/library.svg' }
  ];
  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const match = this.tabs.find(tab => url.includes(tab.name));
        this.selectedTab = match ? match.name : '';
      });
  }

  selectTab(tabName: string) {
    this.router.navigate([`/${tabName}`]);
  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: false
})
export class ViewPage implements OnInit {
  pages: string[] = [
    'assets/pages/greenpookies.jpg',
    'assets/pages/yuri.jpg',
    'assets/pages/mitsuaya.jpg',
    'assets/pages/yuri2.jpg',
    'assets/pages/yuri3.jpg',
    'assets/pages/yuri4.jpg',
  ];

  currentPage: number = 0;

  ngOnInit() {
    // Aquí podés poner lógica de carga si hace falta en el futuro
  }

  get currentImage(): string {
    return this.pages[this.currentPage];
  }

  goToPrevious() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToNext() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
    }
  }
}

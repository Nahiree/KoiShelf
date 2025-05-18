import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  currentIndex = 0;

  news = [
    {
      image: 'assets/news/shoyo1.jpg'
,
      title: 'Haikyu!! confirma la animación del arco final',
    },
    {
      image: 'assets/news/jjk.jpeg',
      title: 'Jujutsu Kaisen regresa con temporada intensa',
    },
    {
      image: 'assets/news/onepiece.jpg',
      title: 'One Piece se acerca al final del arco Wano',
    }
  ];
  fading: boolean = false;

  ngOnInit() {
    setInterval(() => {
      this.fadeToNext();
    }, 2990); // Cambia cada 3 segundos
  }

  fadeToNext() {
    this.fading = true;

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.news.length;
      this.fading = false;
    }, 250); // Duración del fade-out
  }

  setIndex(index: number) {
    this.currentIndex = index;
  }
}




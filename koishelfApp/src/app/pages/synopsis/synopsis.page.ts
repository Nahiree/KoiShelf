import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.page.html',
  styleUrls: ['./synopsis.page.scss'],
  standalone: false,
})
export class SynopsisPage implements OnInit {
   mangasypnosis: any;

  constructor() { }

  ngOnInit() {
     this.mangasypnosis = {
      title: 'Haikyū!!',
      author: 'Haruichi Furudate',
      synopsis: [
      "Despues de ver en la televisión a un jugador del equipo Karasuno conocido como 'El Pequeño Gigante', Shoyo Hinata decidió dedicar su vida al voleibol a pesar de ser de baja estatura. Pero en su último torneo en secundaria, su equipo recibe una auténtica paliza por parte del equipo de Tobio Kageyama.",
      "A pesar de la derrota, Hinata se une al equipo de voleibol de su instituto para así vengarse de Kageyama pero, para su sorpresa, Kageyama también está en el equipo. Así, dos antiguos rivales forman un equipo imbatible con el que buscan llegar al campeonato nacional."
      ],
      biography: `In 2008, Furudate wrote the one-shot King Kid, which received an honorable mention in the Jump Treasure Newcomer Manga Award. In 2010, Furudate debuted their first series in Weekly Shōnen Jump...`,
      otherWorks: [
        'assets/img/obra1.jpg',
        'assets/img/obra2.jpg',
        'assets/img/obra3.jpg'
      ]
    };
  }

}

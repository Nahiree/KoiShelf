// manga-section.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manga-section',
  templateUrl: './manga-section.component.html',
  styleUrls: ['./manga-section.component.scss'],
  standalone: false
})
export class MangaSectionComponent {
  @Input() title!: string;
  @Input() mangas: any[] = [];
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ButtonlinearComponent } from 'src/app/components/buttonlinear/buttonlinear.component';
import { CardWithTitleComponent } from 'src/app/components/card-with-title/card-with-title.component';
import { CardWithProgressComponent } from 'src/app/components/card-with-progress/card-with-progress.component';
import { CardStoreComponent } from 'src/app/components/card-store/card-store.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { HeartComponent } from "src/app/components/heart/heart.component";
import { SaveComponent } from "src/app/components/save/save.component";
import { ShareIconComponent } from "src/app/components/share-icon/share-icon.component";
import { MangaSectionComponent } from 'src/app/components/manga-section/manga-section.component';



@NgModule({
  exports:[MenuComponent, ButtonlinearComponent, CardWithTitleComponent, CardWithProgressComponent, CardStoreComponent, RatingComponent, HeartComponent, SaveComponent, ShareIconComponent, MangaSectionComponent],
  declarations: [MenuComponent, ButtonlinearComponent, CardWithTitleComponent, CardWithProgressComponent, CardStoreComponent, RatingComponent, HeartComponent, SaveComponent, ShareIconComponent, MangaSectionComponent],
  imports: [
    IonicModule.forRoot(),
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }

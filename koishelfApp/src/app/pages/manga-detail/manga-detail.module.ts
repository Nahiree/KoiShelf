import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaDetailPageRoutingModule } from './manga-detail-routing.module';

import { MangaDetailPage } from './manga-detail.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaDetailPage]
})
export class MangaDetailPageModule {}

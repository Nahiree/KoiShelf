import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaFollowPageRoutingModule } from './manga-follow-routing.module';

import { MangaFollowPage } from './manga-follow.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaFollowPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaFollowPage]
})
export class MangaFollowPageModule {}

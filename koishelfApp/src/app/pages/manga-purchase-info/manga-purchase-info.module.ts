import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaPurchaseInfoPageRoutingModule } from './manga-purchase-info-routing.module';

import { MangaPurchaseInfoPage } from './manga-purchase-info.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaPurchaseInfoPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaPurchaseInfoPage]
})
export class MangaPurchaseInfoPageModule {}

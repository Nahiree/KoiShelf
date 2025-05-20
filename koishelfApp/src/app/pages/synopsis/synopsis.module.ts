import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SynopsisPageRoutingModule } from './synopsis-routing.module';

import { SynopsisPage } from './synopsis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SynopsisPageRoutingModule
  ],
  declarations: [SynopsisPage]
})
export class SynopsisPageModule {}

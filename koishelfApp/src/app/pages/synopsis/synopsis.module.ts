import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SynopsisPageRoutingModule } from './synopsis-routing.module';

import { SynopsisPage } from './synopsis.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SynopsisPageRoutingModule,
    SharedModule
  ],
  declarations: [SynopsisPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SynopsisPageModule {}

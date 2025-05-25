import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangatecaEdicionPageRoutingModule } from './mangateca-edicion-routing.module';

import { MangatecaEdicionPage } from './mangateca-edicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangatecaEdicionPageRoutingModule
  ],
  declarations: [MangatecaEdicionPage]
})
export class MangatecaEdicionPageModule {}

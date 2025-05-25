import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangatecaPageRoutingModule } from './mangateca-routing.module';

import { MangatecaPage } from './mangateca.page';
import { SharedModule } from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangatecaPageRoutingModule,
    SharedModule
],
  declarations: [MangatecaPage]
})
export class MangatecaPageModule {}

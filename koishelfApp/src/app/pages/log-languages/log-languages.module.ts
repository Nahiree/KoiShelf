import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogLanguagesPageRoutingModule } from './log-languages-routing.module';

import { LogLanguagesPage } from './log-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogLanguagesPageRoutingModule
  ],
  declarations: [LogLanguagesPage]
})
export class LogLanguagesPageModule {}

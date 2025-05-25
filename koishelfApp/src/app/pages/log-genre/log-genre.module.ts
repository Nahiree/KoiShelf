import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogGenrePageRoutingModule } from './log-genre-routing.module';

import { LogGenrePage } from './log-genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogGenrePageRoutingModule
  ],
  declarations: [LogGenrePage]
})
export class LogGenrePageModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NewsComponent } from '../components/news/news.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NewsComponent,
    HomePageRoutingModule,

  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomePageModule {
  
}

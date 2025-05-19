import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MangaSectionComponent } from '../../components/manga-section/manga-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    SharedModule,
    MangaSectionComponent
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}

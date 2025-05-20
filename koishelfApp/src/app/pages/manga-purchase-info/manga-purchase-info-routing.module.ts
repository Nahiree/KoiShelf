import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaPurchaseInfoPage } from './manga-purchase-info.page';

const routes: Routes = [
  {
    path: '',
    component: MangaPurchaseInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaPurchaseInfoPageRoutingModule {}

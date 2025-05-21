import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangatecaEdicionPage } from './mangateca-edicion.page';

const routes: Routes = [
  {
    path: '',
    component: MangatecaEdicionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangatecaEdicionPageRoutingModule {}

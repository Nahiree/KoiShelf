import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogLanguagesPage } from './log-languages.page';

const routes: Routes = [
  {
    path: '',
    component: LogLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogLanguagesPageRoutingModule {}

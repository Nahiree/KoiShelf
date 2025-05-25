import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogGenrePage } from './log-genre.page';

const routes: Routes = [
  {
    path: '',
    component: LogGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogGenrePageRoutingModule {}

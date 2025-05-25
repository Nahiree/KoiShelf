import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaFollowPage } from './manga-follow.page';

const routes: Routes = [
  {
    path: '',
    component: MangaFollowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaFollowPageRoutingModule {}

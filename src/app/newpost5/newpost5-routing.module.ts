import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost5Page } from './newpost5.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost5PageRoutingModule {}

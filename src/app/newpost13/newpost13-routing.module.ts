import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost13Page } from './newpost13.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost13PageRoutingModule {}

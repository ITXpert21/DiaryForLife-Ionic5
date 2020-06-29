import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost13Page } from './editpost13.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost13PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost5Page } from './editpost5.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost5PageRoutingModule {}

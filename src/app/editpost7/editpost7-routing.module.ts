import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost7Page } from './editpost7.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost7PageRoutingModule {}

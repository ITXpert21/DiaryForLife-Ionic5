import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost10Page } from './editpost10.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost10PageRoutingModule {}

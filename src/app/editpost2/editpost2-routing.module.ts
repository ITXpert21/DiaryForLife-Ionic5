import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost2Page } from './editpost2.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost2PageRoutingModule {}

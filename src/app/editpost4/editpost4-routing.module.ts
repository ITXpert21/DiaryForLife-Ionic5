import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost4Page } from './editpost4.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost4PageRoutingModule {}

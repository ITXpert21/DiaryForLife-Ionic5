import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost4Page } from './newpost4.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost4PageRoutingModule {}

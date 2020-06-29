import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost2Page } from './newpost2.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost10Page } from './newpost10.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost10PageRoutingModule {}

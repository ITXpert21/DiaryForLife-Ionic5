import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost9Page } from './newpost9.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost9PageRoutingModule {}

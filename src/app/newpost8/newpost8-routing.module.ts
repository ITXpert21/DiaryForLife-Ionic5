import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost8Page } from './newpost8.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost8PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost8Page } from './editpost8.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost8PageRoutingModule {}

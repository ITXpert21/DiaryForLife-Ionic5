import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost9Page } from './editpost9.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost9PageRoutingModule {}

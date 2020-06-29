import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost12Page } from './editpost12.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost12PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost12Page } from './newpost12.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost12PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost11Page } from './newpost11.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost11PageRoutingModule {}

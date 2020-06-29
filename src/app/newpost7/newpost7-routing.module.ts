import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost7Page } from './newpost7.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost7PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost6Page } from './newpost6.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost6PageRoutingModule {}

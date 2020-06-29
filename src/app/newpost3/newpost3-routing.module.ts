import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newpost3Page } from './newpost3.page';

const routes: Routes = [
  {
    path: '',
    component: Newpost3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newpost3PageRoutingModule {}

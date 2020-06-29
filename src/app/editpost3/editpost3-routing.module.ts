import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost3Page } from './editpost3.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost3PageRoutingModule {}

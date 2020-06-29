import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost11Page } from './editpost11.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost11PageRoutingModule {}

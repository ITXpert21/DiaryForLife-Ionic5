import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editpost6Page } from './editpost6.page';

const routes: Routes = [
  {
    path: '',
    component: Editpost6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editpost6PageRoutingModule {}

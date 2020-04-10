import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewdiaryPage } from './newdiary.page';

const routes: Routes = [
  {
    path: '',
    component: NewdiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewdiaryPageRoutingModule {}

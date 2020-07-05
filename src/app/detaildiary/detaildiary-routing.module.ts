import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaildiaryPage } from './detaildiary.page';

const routes: Routes = [
  {
    path: '',
    component: DetaildiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaildiaryPageRoutingModule {}

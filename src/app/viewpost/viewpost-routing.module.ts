import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpostPage } from './viewpost.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpostPageRoutingModule {}

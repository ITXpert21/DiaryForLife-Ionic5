import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpostPage } from './newpost.page';

const routes: Routes = [
  {
    path: '',
    component: NewpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpostPageRoutingModule {}

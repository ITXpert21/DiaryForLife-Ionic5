import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignoutPage } from './signout.page';

const routes: Routes = [
  {
    path: '',
    component: SignoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignoutPageRoutingModule {}

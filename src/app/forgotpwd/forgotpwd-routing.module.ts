import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpwdPage } from './forgotpwd.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpwdPageRoutingModule {}

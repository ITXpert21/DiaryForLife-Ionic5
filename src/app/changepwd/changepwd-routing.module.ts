import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepwdPage } from './changepwd.page';

const routes: Routes = [
  {
    path: '',
    component: ChangepwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangepwdPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofilePage } from './myprofile.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofilePageRoutingModule {}

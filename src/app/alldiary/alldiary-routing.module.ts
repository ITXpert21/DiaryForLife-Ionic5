import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlldiaryPage } from './alldiary.page';

const routes: Routes = [
  {
    path: '',
    component: AlldiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlldiaryPageRoutingModule {}

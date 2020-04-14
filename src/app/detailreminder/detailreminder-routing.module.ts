import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailreminderPage } from './detailreminder.page';

const routes: Routes = [
  {
    path: '',
    component: DetailreminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailreminderPageRoutingModule {}

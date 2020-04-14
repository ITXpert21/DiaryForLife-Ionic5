import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddreminderPage } from './addreminder.page';

const routes: Routes = [
  {
    path: '',
    component: AddreminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddreminderPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditreminderPage } from './editreminder.page';

const routes: Routes = [
  {
    path: '',
    component: EditreminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditreminderPageRoutingModule {}

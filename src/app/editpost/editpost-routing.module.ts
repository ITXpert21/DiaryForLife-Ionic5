import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpostPage } from './editpost.page';

const routes: Routes = [
  {
    path: '',
    component: EditpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpostPageRoutingModule {}

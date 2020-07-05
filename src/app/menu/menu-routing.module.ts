import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { HomePage } from './../home/home.page';

const routes : Routes = [
  {
    path : 'menu',
    component : MenuPage,
    children : [
      {
        path : 'home',
        outlet : 'menucontent',
        component : HomePage
      }
    ]
  },
  {
    path : '',
    redirectTo : '/menu/(menucontent:home)'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

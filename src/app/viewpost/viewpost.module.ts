import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpostPageRoutingModule } from './viewpost-routing.module';

import { ViewpostPage } from './viewpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpostPageRoutingModule
  ],
  declarations: [ViewpostPage]
})
export class ViewpostPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewdiaryPageRoutingModule } from './newdiary-routing.module';

import { NewdiaryPage } from './newdiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewdiaryPageRoutingModule
  ],
  declarations: [NewdiaryPage]
})
export class NewdiaryPageModule {}

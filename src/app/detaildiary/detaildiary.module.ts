import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaildiaryPageRoutingModule } from './detaildiary-routing.module';

import { DetaildiaryPage } from './detaildiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaildiaryPageRoutingModule
  ],
  declarations: [DetaildiaryPage]
})
export class DetaildiaryPageModule {}

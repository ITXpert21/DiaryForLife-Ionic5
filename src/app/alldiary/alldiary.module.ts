import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlldiaryPageRoutingModule } from './alldiary-routing.module';

import { AlldiaryPage } from './alldiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlldiaryPageRoutingModule
  ],
  declarations: [AlldiaryPage]
})
export class AlldiaryPageModule {}

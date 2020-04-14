import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailreminderPageRoutingModule } from './detailreminder-routing.module';

import { DetailreminderPage } from './detailreminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailreminderPageRoutingModule
  ],
  declarations: [DetailreminderPage]
})
export class DetailreminderPageModule {}

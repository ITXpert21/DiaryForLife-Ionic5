import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddreminderPageRoutingModule } from './addreminder-routing.module';

import { AddreminderPage } from './addreminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddreminderPageRoutingModule
  ],
  declarations: [AddreminderPage]
})
export class AddreminderPageModule {}

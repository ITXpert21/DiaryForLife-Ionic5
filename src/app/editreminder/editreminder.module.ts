import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditreminderPageRoutingModule } from './editreminder-routing.module';

import { EditreminderPage } from './editreminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditreminderPageRoutingModule
  ],
  declarations: [EditreminderPage]
})
export class EditreminderPageModule {}

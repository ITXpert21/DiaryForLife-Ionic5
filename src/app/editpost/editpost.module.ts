import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpostPageRoutingModule } from './editpost-routing.module';

import { EditpostPage } from './editpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpostPageRoutingModule
  ],
  declarations: [EditpostPage]
})
export class EditpostPageModule {}

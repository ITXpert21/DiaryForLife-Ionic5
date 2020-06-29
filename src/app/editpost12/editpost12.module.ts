import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost12PageRoutingModule } from './editpost12-routing.module';

import { Editpost12Page } from './editpost12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost12PageRoutingModule
  ],
  declarations: [Editpost12Page]
})
export class Editpost12PageModule {}

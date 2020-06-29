import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost2PageRoutingModule } from './editpost2-routing.module';

import { Editpost2Page } from './editpost2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost2PageRoutingModule
  ],
  declarations: [Editpost2Page]
})
export class Editpost2PageModule {}

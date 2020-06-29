import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost2PageRoutingModule } from './newpost2-routing.module';

import { Newpost2Page } from './newpost2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost2PageRoutingModule
  ],
  declarations: [Newpost2Page]
})
export class Newpost2PageModule {}

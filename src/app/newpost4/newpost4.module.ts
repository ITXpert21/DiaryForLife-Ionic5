import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost4PageRoutingModule } from './newpost4-routing.module';

import { Newpost4Page } from './newpost4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost4PageRoutingModule
  ],
  declarations: [Newpost4Page]
})
export class Newpost4PageModule {}

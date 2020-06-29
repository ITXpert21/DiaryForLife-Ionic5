import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost4PageRoutingModule } from './editpost4-routing.module';

import { Editpost4Page } from './editpost4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost4PageRoutingModule
  ],
  declarations: [Editpost4Page]
})
export class Editpost4PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost11PageRoutingModule } from './editpost11-routing.module';

import { Editpost11Page } from './editpost11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost11PageRoutingModule
  ],
  declarations: [Editpost11Page]
})
export class Editpost11PageModule {}

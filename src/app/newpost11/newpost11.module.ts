import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost11PageRoutingModule } from './newpost11-routing.module';

import { Newpost11Page } from './newpost11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost11PageRoutingModule
  ],
  declarations: [Newpost11Page]
})
export class Newpost11PageModule {}

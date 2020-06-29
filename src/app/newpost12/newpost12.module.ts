import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost12PageRoutingModule } from './newpost12-routing.module';

import { Newpost12Page } from './newpost12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost12PageRoutingModule
  ],
  declarations: [Newpost12Page]
})
export class Newpost12PageModule {}

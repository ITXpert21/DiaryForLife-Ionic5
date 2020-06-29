import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost6PageRoutingModule } from './newpost6-routing.module';

import { Newpost6Page } from './newpost6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost6PageRoutingModule
  ],
  declarations: [Newpost6Page]
})
export class Newpost6PageModule {}

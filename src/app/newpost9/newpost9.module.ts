import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost9PageRoutingModule } from './newpost9-routing.module';

import { Newpost9Page } from './newpost9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost9PageRoutingModule
  ],
  declarations: [Newpost9Page]
})
export class Newpost9PageModule {}

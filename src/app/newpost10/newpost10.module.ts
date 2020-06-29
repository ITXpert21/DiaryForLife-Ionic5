import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost10PageRoutingModule } from './newpost10-routing.module';

import { Newpost10Page } from './newpost10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost10PageRoutingModule
  ],
  declarations: [Newpost10Page]
})
export class Newpost10PageModule {}

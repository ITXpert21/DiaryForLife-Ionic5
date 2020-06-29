import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost7PageRoutingModule } from './newpost7-routing.module';

import { Newpost7Page } from './newpost7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost7PageRoutingModule
  ],
  declarations: [Newpost7Page]
})
export class Newpost7PageModule {}

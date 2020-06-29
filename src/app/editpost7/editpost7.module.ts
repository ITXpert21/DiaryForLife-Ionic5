import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost7PageRoutingModule } from './editpost7-routing.module';

import { Editpost7Page } from './editpost7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost7PageRoutingModule
  ],
  declarations: [Editpost7Page]
})
export class Editpost7PageModule {}

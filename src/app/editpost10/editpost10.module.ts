import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost10PageRoutingModule } from './editpost10-routing.module';

import { Editpost10Page } from './editpost10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost10PageRoutingModule
  ],
  declarations: [Editpost10Page]
})
export class Editpost10PageModule {}

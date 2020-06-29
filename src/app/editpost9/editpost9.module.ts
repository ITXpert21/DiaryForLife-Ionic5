import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost9PageRoutingModule } from './editpost9-routing.module';

import { Editpost9Page } from './editpost9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost9PageRoutingModule
  ],
  declarations: [Editpost9Page]
})
export class Editpost9PageModule {}

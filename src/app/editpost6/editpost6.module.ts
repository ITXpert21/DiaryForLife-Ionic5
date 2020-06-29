import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost6PageRoutingModule } from './editpost6-routing.module';

import { Editpost6Page } from './editpost6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost6PageRoutingModule
  ],
  declarations: [Editpost6Page]
})
export class Editpost6PageModule {}

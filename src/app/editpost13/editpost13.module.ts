import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost13PageRoutingModule } from './editpost13-routing.module';

import { Editpost13Page } from './editpost13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost13PageRoutingModule
  ],
  declarations: [Editpost13Page]
})
export class Editpost13PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost5PageRoutingModule } from './editpost5-routing.module';

import { Editpost5Page } from './editpost5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost5PageRoutingModule
  ],
  declarations: [Editpost5Page]
})
export class Editpost5PageModule {}

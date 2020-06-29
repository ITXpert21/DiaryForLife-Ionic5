import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost3PageRoutingModule } from './editpost3-routing.module';

import { Editpost3Page } from './editpost3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost3PageRoutingModule
  ],
  declarations: [Editpost3Page]
})
export class Editpost3PageModule {}

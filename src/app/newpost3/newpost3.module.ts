import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost3PageRoutingModule } from './newpost3-routing.module';

import { Newpost3Page } from './newpost3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost3PageRoutingModule
  ],
  declarations: [Newpost3Page]
})
export class Newpost3PageModule {}

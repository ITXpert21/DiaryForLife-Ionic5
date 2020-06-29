import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost13PageRoutingModule } from './newpost13-routing.module';

import { Newpost13Page } from './newpost13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost13PageRoutingModule
  ],
  declarations: [Newpost13Page]
})
export class Newpost13PageModule {}

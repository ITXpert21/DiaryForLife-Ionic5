import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost5PageRoutingModule } from './newpost5-routing.module';

import { Newpost5Page } from './newpost5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost5PageRoutingModule
  ],
  declarations: [Newpost5Page]
})
export class Newpost5PageModule {}

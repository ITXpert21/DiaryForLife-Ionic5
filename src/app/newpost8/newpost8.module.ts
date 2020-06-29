import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newpost8PageRoutingModule } from './newpost8-routing.module';

import { Newpost8Page } from './newpost8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newpost8PageRoutingModule
  ],
  declarations: [Newpost8Page]
})
export class Newpost8PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editpost8PageRoutingModule } from './editpost8-routing.module';

import { Editpost8Page } from './editpost8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editpost8PageRoutingModule
  ],
  declarations: [Editpost8Page]
})
export class Editpost8PageModule {}

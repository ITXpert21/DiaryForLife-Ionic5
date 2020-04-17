import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepwdPageRoutingModule } from './changepwd-routing.module';

import { ChangepwdPage } from './changepwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepwdPageRoutingModule
  ],
  declarations: [ChangepwdPage]
})
export class ChangepwdPageModule {}

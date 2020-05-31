import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaEditPageRoutingModule } from './pizza-edit-routing.module';

import { PizzaEditPage } from './pizza-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaEditPageRoutingModule
  ],
  declarations: [PizzaEditPage]
})
export class PizzaEditPageModule {}

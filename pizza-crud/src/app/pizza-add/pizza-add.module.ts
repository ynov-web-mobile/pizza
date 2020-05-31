import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaAddPageRoutingModule } from './pizza-add-routing.module';

import { PizzaAddPage } from './pizza-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaAddPageRoutingModule
  ],
  declarations: [PizzaAddPage]
})
export class PizzaAddPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPizzaPage } from './view-pizza.page';

import { IonicModule } from '@ionic/angular';

import { ViewPizzaPageRoutingModule } from './view-pizza-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPizzaPageRoutingModule
  ],
  declarations: [ViewPizzaPage]
})
export class ViewPizzaPageModule {}

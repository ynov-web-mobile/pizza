import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPizzaPage } from './view-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPizzaPageRoutingModule {}

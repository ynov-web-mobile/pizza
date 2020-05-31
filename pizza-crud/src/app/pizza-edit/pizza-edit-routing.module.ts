import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaEditPage } from './pizza-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaEditPageRoutingModule {}

import { Component } from '@angular/core';
import { PizzaService, Pizza } from '../services/pizza.service';
import { IngredientService, Ingredient } from '../services/ingredient.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private dataPizza: PizzaService, private dataIngredient: IngredientService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getPizzas(): Pizza[] {
    console.log(this.dataPizza.getPizzas());
    return this.dataPizza.getPizzas();
  }

  getIngredients(): Ingredient[]{
    console.log(this.dataIngredient.getIngredients());
    return this.dataIngredient.getIngredients();
  }
}

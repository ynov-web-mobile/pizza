import { Component, OnInit, Input } from '@angular/core';
import { Pizza, PizzaService } from '../services/pizza.service';
import { Ingredient, IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private dataPizza: PizzaService, private dataIngredient: IngredientService) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getIngredients(): any[] {
    console.log(this.dataIngredient.getIngredients(), 'ici');
    const data: Ingredient[] = this.dataIngredient.getIngredients();
    return data;
  }
}

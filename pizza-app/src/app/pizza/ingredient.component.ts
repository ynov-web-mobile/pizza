import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../services/ingredient.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() pizza: Ingredient;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}

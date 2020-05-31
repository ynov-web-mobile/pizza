import { Injectable } from '@angular/core';

export interface Ingredient {
  id: number;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  public ingredients: Ingredient[] = [
    {
      id: 8,
      nom: "Viande hachée"
    },
    {
      id: 9,
      nom: "Merguez"
    },
    {
      id: 10,
      nom: "Tomate"
    },
    {
      id: 11,
      nom: "Poivrant"
    },
    {
      id: 12,
      nom: "champignon"
    },
    {
      nom: "Patate",
      id: 13
    }
  ];

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public getIngredientById(id: number): Ingredient {
    return this.ingredients[id];
  }
}

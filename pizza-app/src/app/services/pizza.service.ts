import { Injectable } from '@angular/core';

export interface Pizza {
  id: number;
  ingredients: string[];
  nom: string;
  photo: string;
  prix: number;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  public pizzas: Pizza[] = [
    {
      id: 11,
      ingredients: [
        "9",
        "10",
        "11",
        "12"
      ],
      nom: "Quenouille",
      photo: "https://i.f1g.fr/media/eidos/178x178_crop/2019/07/01/XVMd65e774c-9bee-11e9-b288-bcfdea1b7529.jpg",
      prix: 12
    },
    {
      id: 12,
      ingredients: [
        "9",
        "10",
        "11",
        "12"
      ],
      prix: 666,
      nom: "a tu vu ???",
      photo: "https://i.ytimg.com/vi/Jc7REwvEZI4/maxresdefault.jpg"
    },
    {
      id: 13,
      ingredients: [
        "8",
        "9",
        "10",
        "11"
      ],
      prix: 99,
      nom: "Chorizo",
      photo: "https://i.pinimg.com/originals/5b/fc/46/5bfc46d02e21b788cdbf2541ba5931b6.gif"
    },
    {
      nom: "Pizza1",
      photo: "",
      prix: 123,
      ingredients: [
        "10",
        "11",
        "12"
      ],
      id: 14
    }
  ];

  constructor() { }

  public getPizzas(): Pizza[] {
    return this.pizzas;
  }

  public getPizzaById(id: number): Pizza {
    return this.pizzas[id];
  }
}

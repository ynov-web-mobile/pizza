import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService, Pizza } from '../services/pizza.service';

@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.page.html',
  styleUrls: ['./view-pizza.page.scss'],
})
export class ViewPizzaPage implements OnInit {
  public pizza: Pizza;

  constructor(
    private data: PizzaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pizza = this.data.getPizzaById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}

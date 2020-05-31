import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Pizza } from '../pizza';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pizzas: Pizza[] = [];

  async getPizzas() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getPizzas()
      .subscribe(res => {
        this.pizzas = res;
        console.log(this.pizzas);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) { }

    ngOnInit() {
      this.getPizzas();
    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.pizzas, event.previousIndex, event.currentIndex);
    }
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.page.html',
  styleUrls: ['./pizza-detail.page.scss'],
})
export class PizzaDetailPage implements OnInit {

  pizza: Pizza = { id: null, ingredients: null, prix: null, nom: '', photo: '' };
  isLoadingResults = false;

  constructor(
    public api: ApiService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router) {}

  async getPizza() {
    if (this.route.snapshot.paramMap.get('id') === 'null') {
      this.presentAlertConfirm('You are not choosing an item from the list');
    } else {
      this.isLoadingResults = true;
      await this.api.getPizza(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.pizza = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  ngOnInit() {
    this.getPizza();
  }

  async deletePizza(id: any) {
    this.isLoadingResults = true;
    await this.api.deletePizza(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([ '/home' ]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  editPizza(id: any) {
    this.router.navigate([ '/pizza-edit', id ]);
  }
}

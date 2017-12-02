import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { ProductModel } from '../product/product.model';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  product: ProductModel = new ProductModel();
  channel: number;
  steps: Array<any> = [
    {
      value: 1,
      title: "Hot"
    },
    {
      value: 2,
      title: "Iced"
    },
    {
      value: 3,
      title: "Frappe"
    }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public events: Events
  ) {
    this.channel = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}

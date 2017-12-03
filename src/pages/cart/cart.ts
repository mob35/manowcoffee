import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.cart = this.navParams.data;
    // console.log(this.cart);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  gotoOrder() {
    this.navCtrl.push(OrderPage)
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';

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
  cart: any = { items: [] };
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartServiceProvider: CartServiceProvider) {
  }

  ionViewWillEnter() {
    this.getCart();
  }
  getCart() {
    this.cart = this.cartServiceProvider.getCart();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  gotoOrder() {
    this.navCtrl.push(OrderPage)
  }
  dissCart(){
    this.cart = this.cartServiceProvider.clearCart();
  }
  removeItem(i){
    this.cart = this.cartServiceProvider.removeItem(i);
  }
  decrease(i){
    this.cart = this.cartServiceProvider.removeQty(i);
  }
  increase(i){
    this.cart = this.cartServiceProvider.addQty(i);
  }
}

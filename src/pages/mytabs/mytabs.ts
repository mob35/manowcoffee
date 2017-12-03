import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the MytabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytabs',
  templateUrl: 'mytabs.html'
})
export class MytabsPage {

  productRoot = ProductPage;
  cartRoot = CartPage;


  constructor(public navCtrl: NavController) { }
  getSelectedTab() {
    
    // return parseInt(window.localStorage.getItem('tab'));
  }
}

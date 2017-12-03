import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { MytabsPage } from '../mytabs/mytabs';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  gotoHome(){
    this.app.getRootNav().setRoot(MytabsPage);
  }
}

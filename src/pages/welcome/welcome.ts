import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { MytabsPage } from '../mytabs/mytabs';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  table: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
  }

  ionViewWillEnter() {
    this.table = window.localStorage.getItem('table');
    setTimeout(() => {
      this.app.getRootNav().setRoot(MytabsPage);
    }, 3000);
  }

}

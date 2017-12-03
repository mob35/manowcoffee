import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barcodeScanner: BarcodeScanner,
    public app: App,
    public platform: Platform,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scanQr() {
    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        window.localStorage.setItem('table', barcodeData.text);
        this.app.getRootNav().setRoot(WelcomePage);
      }, (err) => {
        // An error occurred
      });
    } else {
      window.localStorage.setItem('table', 'ละมุนภัณฑ์โต๊ะที่01');
      this.app.getRootNav().setRoot(WelcomePage);
    }

  }

}

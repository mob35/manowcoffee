import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { ProductModel } from '../product/product.model';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';
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
  cost: string;
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
    public events: Events,
    public productServiceProvider: ProductServiceProvider
  ) {
    this.cost = 'hot';
  }
  ionViewWillEnter() {
    this.getProductlist();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  getProductlist() {
    this.productServiceProvider.getProduct();
    this.productServiceProvider.getProduct().then((data) => {
      console.log(data);
      this.product = data;
    }, (err) => {
      console.log(err);
    });
  }
  selectProd(e) {
    this.navCtrl.push(ProductDetailPage, e);
  }
  addToCart(prod) {
    console.log(prod);
  }

}

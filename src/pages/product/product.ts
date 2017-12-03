import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { ProductModel } from '../product/product.model';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { CartPage } from '../cart/cart';
import { MytabsPage } from '../mytabs/mytabs';
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
  countNum: Array<any> = [];
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
  // selected: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public events: Events,
    public productServiceProvider: ProductServiceProvider,
    public cartService: CartServiceProvider
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
      // console.log(data);
      this.product = data;
    }, (err) => {
      console.log(err);
    });
  }
  selectProd(e) {
    this.navCtrl.push(ProductDetailPage, e);
  }
  addToCart() {
    // this.selected.push(prod);
    window.localStorage.setItem('tab','2');
    this.app.getRootNav().setRoot(MytabsPage);
    // this.navCtrl.push(CartPage, this.countNum);
  }
  count(e) {
    this.countNum.push(e);
    console.log(this.cartService.addTocart(e));

    // window.localStorage.setItem('count', JSON.stringify(this.countNum));
  }

}

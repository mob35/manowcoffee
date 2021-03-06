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
  qty: 0;
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
    this.qty = 0;
    this.getProductlist();
    this.countNum = this.cartService.getCart().items;
    this.countNum.forEach(item => {
      this.qty += item.qty;
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  getProductlist() {
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
    window.localStorage.setItem('tab', '1');
    this.app.getRootNav().setRoot(MytabsPage);
    this.navCtrl.push(CartPage);
  }
  count(e) {
    this.qty = 0;
    console.log(this.cartService.addTocart(e));
    this.countNum = this.cartService.getCart().items;
    this.countNum.forEach(item => {
      this.qty += item.qty;
    });

    // window.localStorage.setItem('count', JSON.stringify(this.countNum));
  }

}

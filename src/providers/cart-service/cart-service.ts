import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CartModel } from '../../pages/cart/cart.model';
/*
  Generated class for the CartServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartServiceProvider {
  cart: CartModel = new CartModel();
  constructor(public http: HttpClient) {
    console.log('Hello CartServiceProvider Provider');
  }

  addTocart(product) {
    var cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : this.cart;
    cart.table = window.localStorage.getItem('table');
    if (cart.items.length > 0) {

    } else {
      cart.items.push({
        _id: product._id,
        name: product.name,
        image: product.image,
        size: product.size,
        qty: 1,
        price: product.price,
        amount: product.price
      });
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    return window.localStorage.getItem('cart');
  }

}

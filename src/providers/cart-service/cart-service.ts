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
  constructor() {
    console.log('Hello CartServiceProvider Provider');
  }

  addTocart(product) {
    var cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : this.cart;
    cart.table = window.localStorage.getItem('table');
    cart.items = cart.items ? cart.items : [];
    var isSame = false;
    if (cart.items.length > 0) {
      cart.items.forEach(itm => {
        if (itm._id.toString() === product._id.toString()) {
          if (itm.size.toString() === product.size.toString()) {
            itm.qty += 1;
            itm.amount = itm.qty * itm.price;
            isSame = true;
          }
        }
      });
      if (!isSame) {
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
    return this.calculate();
  }

  addQty(i) {
    var cart = this.getCart();
    cart.items[i].qty += 1;
    cart.items[i].amount = cart.items[i].qty * cart.items[i].price;
    window.localStorage.setItem('cart', JSON.stringify(cart));    
    return this.calculate();
  }

  removeQty(i) {
    var cart = this.getCart();
    cart.items[i].qty -= 1;
    cart.items[i].amount = cart.items[i].qty * cart.items[i].price;
    window.localStorage.setItem('cart', JSON.stringify(cart));    
    return this.calculate(); 
  }

  removeItem(i) {
    var cart = this.getCart();
    cart.items.splice(i, 1);
    window.localStorage.setItem('cart', JSON.stringify(cart));    
    return this.calculate();      
  }

  calculate() {
    var cart = this.getCart();
    var total = 0;
    cart.items.forEach(itm => {
      total += itm.amount;
    });

    cart.total = total;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    return this.getCart();
  }

  getCart() {
    var cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {};
    return cart;
  }

}

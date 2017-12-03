import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonProductListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-product-list',
  templateUrl: 'ion-product-list.html'
})
export class IonProductListComponent {
  cart = {
    _id: '',
    name: '',
    image: '',
    size: '',
    price: 0
  };
  @Input() items: any;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  @Output() addcart: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello IonProductListComponent Component');
  }
  gotoDetail(itm) {
    this.selected.emit(itm);
  }
  count(item, itm) {
    this.cart = {
      _id: item._id,
      name: item.name,
      image: item.image,
      size: itm.name,
      price: itm.price
    }

    // console.log(this.cart);
    this.addcart.emit(this.cart);
  }
}

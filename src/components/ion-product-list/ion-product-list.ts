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
  @Input() items: any;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  @Output() qty: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello IonProductListComponent Component');
  }
  gotoDetail(itm) {
    this.selected.emit(itm);
  }
  count(itm){
    console.log(itm);
    // this.qty.emit(itm);
  }
}

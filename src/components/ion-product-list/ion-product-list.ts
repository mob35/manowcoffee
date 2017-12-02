import { Component, Input } from '@angular/core';

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

  constructor() {
    console.log('Hello IonProductListComponent Component');
  }
  gotoDetail(itm) {
    console.log(itm);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonSegmentComponent } from '../ion-segment/ion-segment';

/**
 * Generated class for the IonSegmentProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-segment-product',
  templateUrl: 'ion-segment-product.html'
})
export class IonSegmentProductComponent {

  @Input() items: any;
  constructor() {
    console.log('Hello IonSegmentProductComponent Component');
  }

}

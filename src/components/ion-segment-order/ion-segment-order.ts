import { Component } from '@angular/core';

/**
 * Generated class for the IonSegmentOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-segment-order',
  templateUrl: 'ion-segment-order.html'
})
export class IonSegmentOrderComponent {

  text: string;

  constructor() {
    console.log('Hello IonSegmentOrderComponent Component');
    this.text = 'Hello World';
  }

}

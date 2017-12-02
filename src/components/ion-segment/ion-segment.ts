import { Component } from '@angular/core';

/**
 * Generated class for the IonSegmentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-segment',
  templateUrl: 'ion-segment.html'
})
export class IonSegmentComponent {

  text: string;

  constructor() {
    console.log('Hello IonSegmentComponent Component');
    this.text = 'Hello World';
  }

}

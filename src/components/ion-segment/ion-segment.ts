import { Component, Input } from '@angular/core';

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
  @Input() channel: any;
  @Input() steps:Array<any>;
  constructor() {
    console.log('Hello IonSegmentComponent Component');
  }

}

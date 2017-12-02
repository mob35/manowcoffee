import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonSegmentComponent } from '../ion-segment/ion-segment';

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
  order: any;
  text: string;
  @Input() items: any;
  @Output() SelectedOrder: EventEmitter<any> = new EventEmitter<any>();
  constructor(public parent: IonSegmentComponent) {
    
  }
  getItem(e) {
    this.order = e;
  }

  getOrder() {
    this.SelectedOrder.emit(this.order);
  }

}

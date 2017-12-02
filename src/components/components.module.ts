import { NgModule } from '@angular/core';
import { IonSegmentOrderComponent } from './ion-segment-order/ion-segment-order';
import { IonSegmentComponent } from './ion-segment/ion-segment';
@NgModule({
	declarations: [IonSegmentOrderComponent,
    IonSegmentComponent],
	imports: [],
	exports: [IonSegmentOrderComponent,
    IonSegmentComponent]
})
export class ComponentsModule {}

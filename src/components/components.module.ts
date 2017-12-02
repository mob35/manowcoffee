import { NgModule } from '@angular/core';
import { IonSegmentOrderComponent } from './ion-segment-order/ion-segment-order';
import { IonSegmentComponent } from './ion-segment/ion-segment';
import { IonSegmentProductComponent } from './ion-segment-product/ion-segment-product';
import { IonProductListComponent } from './ion-product-list/ion-product-list';
@NgModule({
	declarations: [IonSegmentOrderComponent,
    IonSegmentComponent,
    IonSegmentProductComponent,
    IonProductListComponent],
	imports: [],
	exports: [IonSegmentOrderComponent,
    IonSegmentComponent,
    IonSegmentProductComponent,
    IonProductListComponent]
})
export class ComponentsModule {}

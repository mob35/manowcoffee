import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MytabsPage } from '../pages/mytabs/mytabs';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { IonSegmentOrderComponent } from '../components/ion-segment-order/ion-segment-order';
import { IonSegmentComponent } from '../components/ion-segment/ion-segment';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MytabsPage,
    ProductPage,
    CartPage,
    IonSegmentOrderComponent,
    IonSegmentComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MytabsPage,
    ProductPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

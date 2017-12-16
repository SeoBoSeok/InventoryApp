import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database"; //

// import { SideMenuContentComponent } from '../../shared/side-menu-content/side-menu-content.component';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebasecreditials'; //
import { InventoryListService } from '../services/Inventory-list/inventory-list.service';
import { ToastService } from '../services/toast/toast.service';

import { Facebook } from "@ionic-native/facebook";
// import { Camera } from '@ionic-native/camera';
// import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';
// import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), //
    AngularFireDatabaseModule //
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InventoryListService,
    ToastService,
    Facebook,
    //Camera,
    // GoogleCloudVisionServiceProvider
  ]
})
export class AppModule {}

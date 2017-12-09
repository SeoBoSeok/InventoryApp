import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { Item } from "../../models/item/item.model";
import { Observable } from 'rxjs/Observable';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { ToastService } from '../../services/toast/toast.service';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData = null;
  inventroyList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private inventory : InventoryListService,
    private facebook : Facebook,
    private toast: ToastService,
    private splashScreen: SplashScreen
  ) {
    this.splashScreen.show();
    this.toast.showAtCenter('Hi');
    this.inventroyList$ = this.inventory
    .getInventoryList() // DB List
    .snapshotChanges() // Key and Value
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
  }

  loginwithFB() {
    this.facebook.login(['email','public_profile'])
    .then((response: FacebookLoginResponse) => {
      // response.authResponse
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []) // Graph api
      .then((profile) => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      });
      }).catch((error) => {
        this.toast.showAtCenter(`This FB login is only working on mobile environment`);
      })
  }

}

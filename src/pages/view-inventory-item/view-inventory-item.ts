import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from "../../models/item/item.model";
// import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the ViewInventoryItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-inventory-item',
  templateUrl: 'view-inventory-item.html',
})
export class ViewInventoryItemPage {
  item: Item;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    // private inventory: InventoryListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ViewInventoryItemPage');
    // this.toast.show(`${item.name}`);
    this.toast.show('item detail infomation');
    this.item = this.navParams.get('item');
  }

}

import { Component } from '@angular/core';
import { Item } from "../../models/item/item.model";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddInventoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-inventory-list',
  templateUrl: 'add-inventory-list.html',
})
export class AddInventoryListPage {
  item: Item = {
    name : '',
    quantity : undefined,
    price: undefined
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inventory: InventoryListService,
    private toast: ToastService
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddInventoryListPage');
  }

  addItem (item:Item) {
    this.inventory.addInventory(item).then(ref => {
      this.toast.show(`${item.name} saved`);
      this.navCtrl.setRoot('HomePage', { key: ref.key } );
    })
  }

}

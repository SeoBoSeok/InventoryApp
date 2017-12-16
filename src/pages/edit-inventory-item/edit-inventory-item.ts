import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { Item } from "../../models/item/item.model";
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { HistoryItem } from '../../models/item/item.historymodel';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EditInventoryItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-inventory-item',
  templateUrl: 'edit-inventory-item.html',
})
export class EditInventoryItemPage {
  item: Item;
  historyitem: HistoryItem;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inventory: InventoryListService,
    private toast: ToastService,
    private modal: ModalController
  ) {
  }

  ionViewWillLoad() {
    // console.log('ionViewDidLoad EditInventoryItemPage');
    // console.log(this.navParams.get('item'));
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddInventoryListPage');
    this.item = this.navParams.get('item');
    console.log(this.item);
  }  

  saveItem (item: Item) {
    this.inventory.editInventory(item)
    .then(() => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeItem (item: Item) {
    this.inventory.removeInventory(item)
    .then(() => {
      this.toast.show(`${item.name} has been deleted`);
      this.navCtrl.setRoot('HomePage');
    })
  }

  openModal(data: HistoryItem) {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    }
    // const myData = {
    //   date: '20171215',
    //   stars: '5'
    // };
    // const item = {
    //   date: string,
    //   title: string,
    //   desc: string,
    //   star: string
    // }

    const myModal = this.modal.create('ModalpagePage', { data: data }, myModalOptions);

    myModal.present();
    myModal.onDidDismiss(data => {
      console.log(data);
    })
  }

  // public selectOption(option: MenuOptionModel): void {
  //   if (option.custom && option.custom.isLogin) {
  //     // Handle the login...
  //   } else if (option.custom && option.custom.isLogout) {
  //     // Handle the logout...
  //   } else if (option.component) {
  //     // Push or set as root the option.component page
  //   }
  // }
}

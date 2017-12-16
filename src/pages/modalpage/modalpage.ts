import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { FormsModule} from '@angular/forms';
// import { Review } from '../../models/item/review.model';
import { Item } from "../../models/item/item.model";
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { HistoryItem } from '../../models/item/item.historymodel';

/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {
  // item: Item;
  data: Item;
  parentKey = '';

  review: HistoryItem = {
    date: '',
    category: '',
    title: '',
    desc: '',
    star: 3
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,
    private inventory: InventoryListService) {
    // this.review.date = data.history.date
  }

  //데이터 입력받기
  ionViewWillLoad() {
    this.data = this.navParams.get('data');
  }

  addHistory(data: Item , review: HistoryItem) {
    data.history.push(review);
    this.inventory.editInventory(data);
    this.view.dismiss();
  }

  closeModal() {
    this.view.dismiss();
  }

  acceptModal() {
    //data 본 페이지로 넘겨주기
    this.view.dismiss(this.review);
    console.log(this.review);
  }


}

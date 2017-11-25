import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { Item } from "../../models/item/item.model";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inventroyList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController, 
    private inventory : InventoryListService
  ) {
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
}

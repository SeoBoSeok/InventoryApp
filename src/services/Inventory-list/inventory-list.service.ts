import { Item } from '../../models/item/item.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
// import { HistoryItem } from '../../models/item/item.historymodel';

@Injectable()
export class InventoryListService {

    private inventoryListRef = this.db.list<Item>('inventory-list');

    constructor (private db: AngularFireDatabase) {

    }

    getInventoryList () {
        return this.inventoryListRef;
    }

    addInventory (item: Item) {
        return this.inventoryListRef.push(item);
    }

    editInventory (item: Item) {
        return this.inventoryListRef.update(item.key, item);
    }

    removeInventory (item:Item) {
        return this.inventoryListRef.remove(item.key);
    }
}
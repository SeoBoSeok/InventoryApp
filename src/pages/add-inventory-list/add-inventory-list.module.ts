import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddInventoryListPage } from './add-inventory-list';

@NgModule({
  declarations: [
    AddInventoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddInventoryListPage),
  ],
})
export class AddInventoryListPageModule {}

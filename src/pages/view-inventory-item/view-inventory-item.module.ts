import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewInventoryItemPage } from './view-inventory-item';

@NgModule({
  declarations: [
    ViewInventoryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewInventoryItemPage),
  ],
})
export class ViewInventoryItemPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditInventoryItemPage } from './edit-inventory-item';

@NgModule({
  declarations: [
    EditInventoryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditInventoryItemPage),
  ],
})
export class EditInventoryItemPageModule {}

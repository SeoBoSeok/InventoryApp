import { Component } from '@angular/core';
import { Item } from "../../models/item/item.model";
import { HistoryItem } from "../../models/item/item.historymodel";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventoryListService } from '../../services/Inventory-list/inventory-list.service';
import { ToastService } from '../../services/toast/toast.service';

import { Platform } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
// import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
import { normalizeURL } from 'ionic-angular';


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
  historyitem : HistoryItem = {
    date: '',
    title: '',
    desc: '',
    star: ''
  }

  item: Item = {
    name : '',
    quantity : undefined,
    price: undefined,
    desc: '',
    history: [ this.historyitem ],
    star: undefined,
    date: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inventory: InventoryListService,
    private toast: ToastService,
    private camera: Camera,
    // private vision: GoogleCloudVisionServiceProvider,
    public platform: Platform
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

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    // this.camera.getPicture(options).then((imageData) => {
    //   this.vision.getLabels(imageData).subscribe((result) => {
    //     // this.inventory.addInventory(imageData);
    //     this.toast.show(imageData);
    //   }, err => {
    //     this.toast.show(err);
    //   });
    // }, err => {
    //   this.toast.show(err);
    // });
    this.camera.getPicture(options).then((imageData) => {

      let base64Image = null;

      //get photo from the camera based on platform type
      if (this.platform.is('ios'))
        base64Image = normalizeURL(imageData);
      else
        base64Image = "data:image/jpeg;base64," + imageData;

      //add photo to the array of photos
      // this.toast.show(base64Image);
      this.addItem(imageData);

    }, (error) => {
      console.debug("Unable to obtain picture: " + error, "app");
      console.log(error);
    });
  }

}

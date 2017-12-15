import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormsModule} from '@angular/forms';
import {Review} from '../../models/item/review.model';

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
  review: Review = {
    date : new Date,
    category: '평가',
    star: 3,
    content: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {

  }

  //데이터 입력받기
  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
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

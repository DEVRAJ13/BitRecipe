import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  tabBarElement: any;

  cards: any;
  category: string = 'gear';

  discription:any;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("data"));
this.data = navParams.get("data");
this.discription = this.data.discription;
console.log();


    this.cards = new Array(10);
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}

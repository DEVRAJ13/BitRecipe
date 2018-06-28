import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { SocialSharing } from '@ionic-native/social-sharing';



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
  category: string = 'gear';
  discription: any;
  title: any;
  image_url: any;
  ingredient: any;
  forsting: any;
  nutritionfacts: any;
  time: any;
  data: any;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, public navParams: NavParams, private toast: Toast) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.data = navParams.get("data");
    this.discription = this.data.discription;
    this.title = this.data.item_name;
    this.image_url = this.data.item_image;
    this.time = this.data.total_time;
    this.ingredient = this.data.ingredients;
    this.forsting = this.data.forsting;
    this.nutritionfacts = this.data.nutrition_facts;

  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  addToList() {
    this.toast.show(`This feature is not enabled yet.`, '5000', 'bottom').subscribe(toast => {});
  }

  shareRecipe(img_url) {
    var name = "Vidhi (Cook Book) for mobiles..."
    // Check if sharing via email is supported
    this.socialSharing.share(name, "", img_url, "https://play.google.com/store?hl=en").then((result) => {
      console.log(result);
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }

}

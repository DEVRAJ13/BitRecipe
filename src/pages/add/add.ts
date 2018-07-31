import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface Post {
  description: string;
  ingredients: string;
  item_image: string;
  nutrition_facts: string;
  time_est: string;
  time_title: string;
  total_time: string;
  item_name: string;
}

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  public anArray: any = [];
  public anInArray: any = [];

  public descriptionArray: any = [];
  public ingredientsArray: any = [];
  public timeArray: any = [];

  data: any;
  total_time: any;
  constructor(public navCtrl: NavController, private afs: AngularFirestore, public navParams: NavParams) {
    this.data = {
      "item_image": '',
      "nutrition_facts": '',
      "item_name": '',
      "time_one": '',
      "title_one": '',
      "time_two": '',
      "title_two": '',
      "time_three": '',
      "title_three": '',
    }



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  goTo(data) {
    this.timeArray = [{
      time_title: 'Prep',
      time_est: this.data.time_one
    }, {
      time_title: 'Cook',
      time_est: this.data.time_two
    }, {
      time_title: 'Ready In',
      time_est: this.data.time_three
    }];

    for (var i = 0; i < this.anArray.length; i++) {
      this.descriptionArray.push(this.anArray[i].value);
    }
    for (var i = 0; i < this.anInArray.length; i++) {
      this.ingredientsArray.push(this.anInArray[i].value);
    }


    this.afs.collection('recipes').add({
      'description': this.descriptionArray,
      'ingredients': this.ingredientsArray,
      'item_image': this.data.item_image,
      'nutrition_facts': this.data.nutrition_facts,
      'total_time': this.timeArray,
      'item_name': this.data.item_name,
    });
  }


  AddDescription() {
    this.anArray.push({ 'value': '' });
  }

  AddIngredient() {
    this.anInArray.push({ 'value': '' });
  }

  // total_time = [{
  //   time_est:
  //   time_title:
  // }]

  // addPost() {
  //   this.afs.collection('recipes').add({
  //     'discription': "",
  //     'ingredients': "",
  //     'item_image': "",
  //     'nutrition_facts': "",
  //     'time_est': "",
  //     'time_title': "",
  //     'item_name':"",
  //   });
  // }

}

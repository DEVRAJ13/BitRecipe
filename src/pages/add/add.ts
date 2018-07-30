import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface Post {
  discription: string;
  ingredients: string;
  item_image: string;
  nutrition_facts: string;
  time_est: string;
  time_title: string;
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

  user = { description: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' } };
  public anArray: any = [];
  public anInArray: any = [];

  public descriptionArray: any = [];
  public ingredientsArray: any = [];

  data = {}
  constructor(public navCtrl: NavController, private afs: AngularFirestore, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  goTo() {
    for (var i = 0; i < this.anArray.length; i++) {
      this.descriptionArray.push(this.anArray[i].value);
    }
    for (var i = 0; i < this.anInArray.length; i++) {
      this.ingredientsArray.push(this.anInArray[i].value);
    }
    console.log("Description::",this.descriptionArray);
    console.log("Ingredients::",this.ingredientsArray);
  }


  AddDescription() {
    this.anArray.push({ 'value': '' });
  }

  AddIngredient() {
    this.anInArray.push({ 'value': '' });
  }


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

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
  total_time:string;
  item_name:string;
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
    this.postsCol = this.afs.collection('recipes');
    this.posts = this.postsCol.valueChanges();
  }




  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToDetail(obj) {
    this.navCtrl.push("DetailPage", {
      data: obj,
    })

  }




}

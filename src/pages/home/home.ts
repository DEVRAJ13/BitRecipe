import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  
  constructor(public navCtrl: NavController,private afs: AngularFirestore, public navParams: NavParams) {
    // console.log("my data"+ this.detail );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToDetail(obj) {
    this.navCtrl.push("DetailPage", {
      data: obj,
    })

  }


  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

}

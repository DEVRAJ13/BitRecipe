import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  detail = [{
    "discription": [{
      "detail": "मध्यम-उच्च पर 4-क्वार्ट सॉस पैन में हीट जैतून का तेल और मक्खन; लहसुन और प्याज जोड़ें और मुलायम तक लगभग 6 मिनट पकाएं। टमाटर का पेस्ट जोड़ें और 2 मिनट अधिक पकाएं, फिर टमाटर, चीनी, नमक, और काली मिर्च जोड़ें; मोटी, 15-18 मिनट तक पकाएं, और पिज्जा सॉस को अलग करें (वैकल्पिक रूप से, स्टोर से खरीदा पिज्जा सॉस का उपयोग करें)।"
    }, {
      "detail": "425 डिग्री करने के लिए हीट ओवन। एक बेकिंग शीट पर, ciabatta, कट-साइड अप रखें। हल्के से कुरकुरे तक 10 मिनट सेंकना। ओवन से निकालें और प्रत्येक आधा पर 1/2 कप सॉस फैलाएं। प्रत्येक 1/4 कप मोज़ेज़ारेला पनीर के साथ शीर्ष पर और शीर्ष पर पेपरोनी विभाजित करें। प्रत्येक आधा और शेष सेंकना पर शेष मोज़ेज़ारेला को विभाजित करें जब तक कि पनीर पिघल जाए और सुनहरा न हो, लगभग 15 मिनट। एक कटिंग बोर्ड में स्थानांतरित करें और तुलसी, चील फ्लेक्स, और परमेसन पनीर के साथ शीर्ष पर जाएं।"
    }],
    "nutrition_facts":"वसा 11.9 ग्राम, कैलोरी 256.0, सोडियम 808.2 मिलीग्राम, शुगर 10.8 ग्राम, कार्बोहाइड्रेट 28.6 ग्राम, प्रोटीन 10.9 ग्राम",
    "item_name": "सबसे आसान पिज्जा (Loaf bread pizza)",
    "total_time": [{
      "time_title":"prep",
      "time_est":"20"
    },
    {
      "time_title":"Cook",
      "time_est":"22"
    },
    {
      "time_title":"Ready In",
      "time_est":"30"
    }],
    "item_image": "https://www.saveur.com/sites/saveur.com/files/styles/655_1x_/public/swm_pizza01_fsadeghin_2000x1500.jpg?itok=3K8mc_NX&fc=50,50",
    "ingredients": [
      "2 बड़ी चम्मच। जैतून का तेल",
      "1 चम्मच। बिना नमक का मक्खन",
      "2 लौंग लहसुन, बारीक कटा हुआ",
      "1 मध्यम पीला प्याज, बारीक कटा हुआ",
      "1 चम्मच। टमाटर का पेस्ट",
      "1 (28-औंस) पूरे छिद्रित टमाटर, हाथ से कुचल सकते हैं",
      "1 चम्मच। चीनी",
      "कोशेर नमक और ताजा जमीन काली मिर्च",
      "1 (12-औंस।) Ciabatta रोटी, लंबाई में आधा",
      "1 1/2 कप grated mozzarella पनीर",
      "दो आउंस। पतली कटा हुआ पेपरोनी",
      "तुलसी पत्तियां, चिली फ्लेक्स, grated parmesan पनीर"
    ],
    "forsting": [
      "2 cups all-purpose flour, or more as needed",
      "3 ounces unsweetened chocolate, chopped",
      "3 ounces semisweet chocolate, chopped",
      "5 cups confectioners' sugar",
      "1 cup sour cream"
    ]
  },{
    "discription": [{
      "detail": "एक बड़े कटोरे में, cilantro, chiles, प्याज, और नींबू गठबंधन।"
    },{
      "detail": "एक छोटे कटोरे में, गठबंधन के लिए नींबू का रस, तेल, नमक, और काली मिर्च।"
    },{
      "detail": "सलाद पर ड्रेसिंग डालो, और नाजुक पत्तियों को चोट पहुंचाने से बचने के लिए धीरे-धीरे टॉस करें। जैतून और एवोकैडो स्लाइस के साथ गार्निश, और तुरंत सेवा करते हैं।"
    }],
    "nutrition_facts":"कैलोरी 279.0,पॉलीअनसैचुरेटेड फैट 2.1 जी,Monounsaturated वसा 8.8 जी,कोलेस्ट्रॉल 41.2 मिलीग्राम,सोडियम 75.6 मिलीग्राम,पोटेशियम 1,198.0 मिलीग्राम,कुल कार्बोहाइड्रेट 20.6 ग्राम",
    "item_name": "ओलिव्स, एवोकैडो, और लाइम्स के साथ सिलेंट्रो सलाद",
    "total_time": [{
      "time_title":"prep",
      "time_est":"15"
    },
    {
      "time_title":"Cook",
      "time_est":"0"
    },
    {
      "time_title":"Ready In",
      "time_est":"20"
    }],
    "item_image": "https://www.saveur.com/sites/saveur.com/files/styles/655_1x_/public/images/2018/06/cilantro-salata-1000x750.jpg?itok=XB4lUk4P&fc=50,50",
    "ingredients": [
      "4 पैक कप (6½ औंस) सिलेंडर पत्तियां, मोटे तौर पर कटा हुआ",
      "2 पोब्लानो चील (7 औंस), स्टेमड, बीज, और पतली कटा हुआ (2 कप)",
      "2 कप लाल प्याज (8 औंस।), चौगुनी और पतली कटा हुआ",
      "1 मध्यम नींबू, छील और पिथ हटा दिया, मांस quartered और पतली कटा हुआ",
      "2 नींबू का रस (¼ कप)",
      "1/3 कप अतिरिक्त कुंवारी जैतून का तेल",
      "1 चम्मच। कोषर नमक",
      "1/2 छोटा चम्मच काली मिर्च पाउडर",
      "10 pitted kalamata जैतून",
      "1 फर्म-परिपक्व एवोकैडो, पतली कटा हुआ",
    ],
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("my data"+ this.detail );
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

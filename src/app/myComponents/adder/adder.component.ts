import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FieldValue } from '@angular/fire/firestore';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {

 
 List = [
     {
      "name": "Lettuce",
      "price": "105",
      "image": "https://media.istockphoto.com/id/182889875/photo/leaf-of-green-romaine-lettuce-with-white-background.jpg?s=2048x2048&w=is&k=20&c=Od4AYnUwMgTwU3T7H8j7vRPsZY1pJktPmDAL1H7oX_M=",
     },
     {
      "name": "Spinach",
      "price": "95",
      "image": "https://www.bigbasket.com/media/uploads/p/l/40138448_3-fresho-baby-spinach.jpg"
     },
     {
      "name": "Silverbeet",
      "price": "40",
      "image": "https://www.shutterstock.com/image-photo/fresh-green-silverbeet-leaves-vegetable-600w-447974419.jpg",
     },
     {
      "name": "Cabbage",
      "price": "98",
      "image": "https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg",
     },
     {
      "name": "Cauliflower,",
      "price": "124",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Chou-fleur_02.jpg",
     },
     {
      "name": "Brussels sprouts",
      "price": "493",
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Bowl-of-sprouts-8305212.jpg?quality=90&webp=true&resize=a"
     },
     {
      "name": "Broccoli",
      "price": "199",
      "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
     },
     {
      "name": "Pumpkin",
      "price": "24.43",
      "image": "https:\/\/www.chfmart.com\/images\/thumbnails\/612\/500\/detailed\/2\/yellow-pumpkin.jpg"
     },
     {
      "name": "Cucumber",
      "price": "51",
      "image": "http://www.plantgrower.org/uploads/6/5/5/4/65545169/published/cucumber-slices.jpg?1516496438"
     },
     {
      "name": "Zucchini",
      "price": "180",
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/92/CSA-Striped-Zucchini.jpg",
     },
     {
      "name": "Potato",
      "price": "56",
      "image": "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg"
     },
     {
      "name": "Sweet potato",
      "price": "64",
      "image": "https://m.media-amazon.com/images/I/71ofgqWjsCL._SX679_.jpg"
     },
     {
      "name": "Yam",
      "price": "74",
      "image": "https://neogric.com/yam-tubers-export-supply-the-complete-guide-to-buying-yam-from-nigeria-and-africa/",
     },
     {
      "name": "Celery",
      "price": "56",
      "image": "https://cdn.britannica.com/68/143768-050-108B71EC/Celery.jpg?w=400&h=300&c=crop"
     },
     {
      "name": "Asparagus",
      "price": "338",
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-asparagus-uc-157-vegetable-seeds-16969049768076_600x600.jpg?v=1634202838"
     },
     {
      "name": "Onion",
      "price": "46",
      "image": "https://www.jiomart.com/images/product/600x600/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg",
     },
     {
      "name": "Garlic",
      "price": "61.5",
      "image": "https://www.bigbasket.com/media/uploads/p/l/10000330_14-fresho-garlic.jpg",
     },
     {
      "name": "Shallot",
      "price": "75",
      "image": "https://www.collinsdictionary.com/images/thumb/shallot_6435766_250.jpg?version=4.0.293"
     }
    ];
   
    

  listter:any[] = [];
  constructor(public afs:AngularFirestore) { }

  ngOnInit(): void {
    this.add1();
  }

  add1()
  {
    this.afs.collection('categories').doc('Vegetables').set({
      id:"Vegetables",
      product:[
        "XyA67cjZ4C4AmuZTRQwK", 
        "kyhaHl3Ujji3V9EvQZCw", 
        "KV9vVemm3pXhD2u0ygxC", 
        "T8y5kA5ttxPo3C3LKXC9", 
        "oWWxHvo0w6yUCgARq5Ox", 
        "cchw9Im6YgVWwjAk0m0v", 
        "2k8BSEWzXiMM8Iqzv9yZ", 
        "Oqx0YxnQfL5IfXUyNhE1", 
        "Qgfds1B7M3S6qmSDO62q", 
        "SJIwI779OhWqGyKADF1k",
        "6U0Y1HM9SJ2EA3g3EXjY",
        "XJf8jxT3pBRFD3IDmEgl",
        "TGSahI2Wjog897U3b5a7",
        "OBwIL6fmA25qKQoly9K2",
        "bipRZTybPApatWSAxhXY",
        "y0nB9ldVL2VN5bMBmAKp",
        "HC5sIGSr1HHZgeuFH8UN",
        "QiYpL41XdST2sM9ENQVn",
      ],
    })
  }

  adder()
  {
    for(var i=0;i<this.List.length;i++)
    {
      this.afs.collection('products').add(this.List[i]).then((doc)=>{
        this.listter.push(doc.id);
        this.afs.collection('products').doc(doc.id).update({
          id:doc.id,
        })
      });
    }
      console.log(this.listter);
  }

 
}

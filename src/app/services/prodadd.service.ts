import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProdaddService {

  constructor(public service:AngularFirestore) { }

  adder()
  {
    var temp = [
      {
        "name": "canned black beans",
        "price": 100,
        "image": "https:\/\/img2.exportersindia.com\/product_images\/bc-small\/2022\/7\/10649454\/canned-black-beans-1658895942-6464656.jpeg"
       },
       {
        "name": "canned red kidney bean",
        "price": 150,
        "image": "https:\/\/img3.exportersindia.com\/product_images\/bc-small\/dir_112\/3350229\/canned-red-kidney-bean-2236463.jpg"
       },
       {
        "name": "canned green bean",
        "price": 200,
        "image": "https:\/\/img1.exportersindia.com\/product_images\/bc-small\/dir_118\/3525453\/canned-french-bean-2208430.jpg"
       },
       {
        "name": "mango pickle",
        "price": 120,
        "image": "https:\/\/www.jiomart.com\/images\/product\/150x150\/491586632\/desi-kitchen-west-mango-pickle-1-kg-product-images-o491586632-p590033918-1-202203170623.jpg"
       },
     ];
    temp.forEach((doc)=>{  
      this.service.collection("products").add(
        {
          'name':doc['name'],
          'price':doc['price'],
          'image':doc['image'],
        }
      ).then((doc1)=>{
        this.service.collection("products").doc(doc1.id).update({
          'id':doc1.id,
        });      
        console.log(doc1.id);
      })
    }); 
   
  }

  add1()
  {
    this.service.collection("categories").doc('HomeMade Canned Goods').set({
      id:"HomeMade Canned Goods",
      product:[
        'fmtBCWVgyCFyXK56AulP',
        '7ggvHdN8lfx6v0QLExMU',
        'U1MeYc7PU89JCBbc1XKa',
        'G08looYduC0Y05MpeTBi',
    ],
    })
  }
}

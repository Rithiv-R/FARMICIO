import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { QuerySnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetcartlistService {

  email!:any;
  constructor(public afs:AngularFirestore,public auth:AngularFireAuth) {
    this.auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
      }
    })
  }

  getlist(email1:any):any
  { 
    var temp:any[] = [];
    var price = 0;
    this.afs.collection('cart').doc(email1).collection('cartorders').get().toPromise().then((querysnapshot)=>{   
      querysnapshot?.forEach((doc)=>{
        price = price + Number(doc.data()['price'])*Number(doc.data()['quantity'])
        temp.push({
          id:doc.data()['id'],
          name:doc.data()['name'],
          image:doc.data()['image'],
          quantity:doc.data()['quantity'],
          price:doc.data()['price'],
        });
      })
    });
    return temp;
  }

 getprice(email1:any){
    var price = 0;
    var tempo: any = [];
    this.afs.collection('cart').doc(email1).collection('cartorders').get().toPromise().then((querysnapshot)=>{   
      querysnapshot?.forEach((doc)=>{
        price = price + Number(doc.data()['price'])*Number(doc.data()['quantity'])  ; 
      })
      tempo.push({price:price});
    });
    return tempo;
  }


}

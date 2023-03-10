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

  async getlist()
  {
    console.log('s');
    var temp1:any[] = [];
    var temp:any[] = [];
    this.afs.collection('cart').doc(this.email).collection('cartorders').get().toPromise().then((querysnapshot)=>{   
      querysnapshot?.forEach((doc)=>{
        temp.push({
          id:doc.data()['id'],
          pid:doc.data()['pid'],
          quantity:doc.data()['quantity'],
          price:doc.data()['price'],
        });
      })
      console.log(temp);
      return temp;
    });
  }

}

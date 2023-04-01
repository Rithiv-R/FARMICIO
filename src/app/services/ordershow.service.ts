import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class OrdershowService {
  email:any;
  constructor(public service:AngularFirestore,public auth:AngularFireAuth) {
    auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
      }
    })
  }

  showorder()
  {
    var orderslist:any = [];
    this.service.collection('orders').doc(this.email).collection("porders").get().toPromise().then((doc)=>{
      doc?.forEach((doc1)=>{
        orderslist.push({
          'address' : doc1.data()['address'],
          'id': doc1.data()['id'],
          'distance':doc1.data()['distance'],
          'products':doc1.data()['arr'],
        });
      });
    });
    return orderslist;
  }

}

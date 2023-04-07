import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartaddingService {

  constructor(private au:AngularFireAuth,private afs:AngularFirestore,private route:ActivatedRoute,private router:Router) {
  }

 
  usermail!:any;

  adder(name:any,image:any,email:any,quantity:any,price:any):void{
   
    this.afs.collection('cart').doc(email).set({'email':email}).then(()=>{
      this.afs.collection('cart').doc(email).collection('cartorders').add({
        name:name,
        image:image,
        quantity:quantity,
        price:price,
      }).then((doc)=>{
        this.afs.collection('cart').doc(email).collection('cartorders').doc(doc.id).update({
          id:doc.id
        });
      })
    }).then(()=>{
      this.router.navigate(['cart']);
    })
  }


}

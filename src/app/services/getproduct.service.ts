import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetproductService {

  constructor(public afs:AngularFirestore) { }

  getProducts(pid:any)
  {
    var dict:any = {};
    this.afs.collection('products').doc(pid).get().toPromise().then((doc:any)=>{
          dict['id']=doc.get('id');
          dict['name']=doc.get('name');
          dict['image']=doc.get('image');
          dict['price']=doc.get('price');
    })
    return dict;
  }


}

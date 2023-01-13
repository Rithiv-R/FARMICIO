import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetlistsService {

  constructor(public afs:AngularFirestore) { }

  readproducts(val:any)
  {
    var mytemp:any[]=[];
    this.afs.collection('categories').doc(val).get().toPromise().then((res) => {
      let x = res?.get('product')
      x.forEach((val1:any)=>{
      this.afs.collection('products').doc(val1).get().toPromise().then((res1:any)=>{
          var dict = {
            id:res1.get('id'),
          name:res1.get('name'),
          photo:res1.get('image'),
          price:res1.get('price'),
          };
          mytemp.push(dict)
      })
    });
  })
  return mytemp;
  }

}

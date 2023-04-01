import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {distanceBetween} from 'geofire-common' 
import { Router, ActivatedRoute } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class OrderaddService {

  email!:any;
  lat!:any;
  long!:any;
  constructor(public service:AngularFirestore,auth:AngularFireAuth,public router:Router) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    })
    auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
      }
    })
  }

  clear(address:any,myarr:any)
  {
    console.log(myarr);
    var farmer:any;
    var distbtw:any;
    this.service.collection("farmers").get().toPromise().then((querysnapshot)=>{   
      var temp: any[] = [];
      querysnapshot?.forEach((doc:any)=>{
        temp.push({'email':doc.data()['email'],
      'distanceInM':distanceBetween([Number(doc.data()['lat']), Number(doc.data()['long'])], [Number(this.lat),Number(this.long)])*1000})    
      })   
      var sortedArray: any = temp.sort((n1,n2) => {
        if (n1.distanceInM > n2.distanceInM) {
            return 1;
        }
        if (n1.distanceInM < n2.distanceInM) {
            return -1;
        }
        return 0;
        });
        farmer = sortedArray[0]['email']
        distbtw = sortedArray[0]['distanceInM']
    }).then(()=>{
      console.log(myarr);
      console.log(farmer);
      console.log(distbtw);
     }).then(()=>{
      this.service.collection("cart").doc(this.email).collection('cartorders').get().toPromise().then((doc)=>{
        doc?.forEach((val:any)=>{
          this.service.collection("cart").doc(this.email).collection("cartorders").doc(val.data()['id']).delete().then(()=>{
            console.log(val.data()['id']);
          });
        })
     })
    }
    );
  
    this.service.collection("orders").doc(this.email).set({'email':this.email}).then(()=>{
      this.service.collection("orders").doc(this.email).collection("porders").add({
        'email':this.email,
        'address':address,
      }).then((doc)=>{
     
        this.service.collection("orders").doc(this.email).collection("porders").doc(doc.id).update({
          'id':doc.id,
        }).then(()=>{
          this.service.collection("orders").doc(this.email).collection("porders").doc(doc.id).update({
            'arr': myarr,
            'famerorder':farmer,
            'distance':distbtw,
          })
        });
        });
      }).then(()=>{
        window.alert('Order Placed Successfully');
        this.router.navigate(['orders']);
      }); 

  }

}

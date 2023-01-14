import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afs:AngularFirestore,public auth:AngularFireAuth,public router:Router) { }

  signin_s(email:string,password:string)
  { 
    this.afs.collection('shopuser').doc(email).get().toPromise().then((doc)=>{
      if(doc?.exists)
      {
        this.auth.signInWithEmailAndPassword(email,password).then(()=>{
          this.router.navigate(["home-s"])
        })
      }
      else
      {
        window.alert('No Registered User')
      }
    });
  }

  signin_s1(email:string,password:string,pid:string)
  { 
    this.afs.collection('shopuser').doc(email).get().toPromise().then((doc)=>{
      if(doc?.exists)
      {
        this.auth.signInWithEmailAndPassword(email,password).then(()=>{
          this.router.navigate(["product",pid])
        })
      }
      else
      {
        window.alert('No Registered User')
      }
    });
  }

  signup_s(email:string,password:string)
  {
    this.afs.collection('shopuser').doc(email).set({
      email:email,
      password:password,
    }).then(()=>{
      this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
        this.router.navigate(["home-s"])
      })
    })
   
  }

  signup_s1(email:string,password:string,pid:string)
  {
    this.afs.collection('shopuser').doc(email).set({
      email:email,
      password:password,
    }).then(()=>{
      this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
        this.router.navigate(["product",pid])
      })
    })
  }


  signin_f(email:string,password:string)
  {
    this.afs.collection('farmers').doc(email).get().toPromise().then((doc)=>{
      if(doc?.exists)
      {
        this.auth.signInWithEmailAndPassword(email,password).then(()=>{
          this.router.navigate(["home-f"])
        })
      }
      else
      {
        window.alert('No Registered User')
      }
    });
  }

  signup_f(email:string,password:string)
  {
    this.afs.collection('farmers').doc(email).set({
      email:email,
      password:password,
    }).then(()=>{
      this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
        this.router.navigate(["home-f"])
      })
    })
   
  }
  
  signout()
  {
    this.auth.signOut().then(()=>{
      this.router.navigate([""])
    })
  }

}

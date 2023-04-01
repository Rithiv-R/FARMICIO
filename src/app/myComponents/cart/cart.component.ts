import { Component, OnInit } from '@angular/core';
import { GetcartlistService } from 'src/app/services/getcartlist.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { OrderaddService } from 'src/app/services/orderadd.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  array= [];
  itemarray!:any;
  email!:any;
  address!:any;
  constructor(private servicecart:GetcartlistService,private auth:AngularFireAuth,public service1:OrderaddService) {
    this.auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        var email = userResponse.email;
        this.email = email;
        this.array = this.servicecart.getlist(email);
      }
    })
  }

  ngOnInit(): void {
  }

  setadd(add:string)
  {
    this.address = add;
  }

  confirm()
  {
    this.service1.clear(this.address,this.array);
  }


}

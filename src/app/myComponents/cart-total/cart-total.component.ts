import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { GetcartlistService } from 'src/app/services/getcartlist.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  price:any;
  email:any;
  @Output() newItemEvent = new EventEmitter();
  constructor(public service:GetcartlistService,public auth:AngularFireAuth) { 
    this.auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
        this.price = this.service.getprice(this.email);
      }
    })
  }


  ngOnInit(): void {
  }


}

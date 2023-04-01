import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GetcartlistService } from 'src/app/services/getcartlist.service';

@Component({
  selector: 'app-cart-itemcard',
  templateUrl: './cart-itemcard.component.html',
  styleUrls: ['./cart-itemcard.component.css']
})
export class CartItemcardComponent implements OnInit {

  @Input() cartitem1 : any;
  constructor(private auth:AngularFireAuth) {
  }

  ngOnInit(): void {
  }


}

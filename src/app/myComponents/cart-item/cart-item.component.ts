import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GetcartlistService } from 'src/app/services/getcartlist.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


  @Input() array:any;
  constructor() { 
  }

  ngOnInit(): void {
   
  }



}

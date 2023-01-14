import { Component, OnInit } from '@angular/core';
import { GetcartlistService } from 'src/app/services/getcartlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  itemarray!:any;
  constructor(public service:GetcartlistService) { }

  ngOnInit(): void {
      this.itemarray = this.service.getlist();
      
  }


}

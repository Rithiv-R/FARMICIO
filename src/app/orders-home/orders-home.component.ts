import { Component, OnInit } from '@angular/core';
import { OrdershowService } from '../services/ordershow.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css']
})
export class OrdersHomeComponent implements OnInit {

  myarr:any = [];
  myitems:any = [];
  constructor(public service:OrdershowService) {
  }

  ngOnInit(): void {
    this.myarr = this.service.showorder();  
  }


}

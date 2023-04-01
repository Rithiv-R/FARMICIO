import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-item',
  templateUrl: './orders-item.component.html',
  styleUrls: ['./orders-item.component.css']
})
export class OrdersItemComponent implements OnInit {

  @Input() item:any;
  @Input() itemlist!:any;
  constructor() { }

  ngOnInit(): void {
  }

}

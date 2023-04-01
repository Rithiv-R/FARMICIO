import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-itemcard',
  templateUrl: './orders-itemcard.component.html',
  styleUrls: ['./orders-itemcard.component.css']
})
export class OrdersItemcardComponent implements OnInit {

  @Input() itemspecific:any;
  constructor() { }

  ngOnInit(): void {
  }

}

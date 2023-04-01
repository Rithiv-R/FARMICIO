import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-addons',
  templateUrl: './cart-addons.component.html',
  styleUrls: ['./cart-addons.component.css']
})
export class CartAddonsComponent implements OnInit {

  s1!:string;
  constructor() { }

  @Output() Addnew = new EventEmitter<string>();

  ngOnInit(): void {
  }

  send(add:string)
  {
    this.Addnew.emit(add);
  }
  
}

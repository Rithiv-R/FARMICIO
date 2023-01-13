import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  @Input() item!:any;

  constructor() { }

  ngOnInit(): void {
  }

}

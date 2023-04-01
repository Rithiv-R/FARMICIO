import { Component, Input, OnInit } from '@angular/core';
import { ProdaddService } from 'src/app/services/prodadd.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  @Input() itemarray:any;
  constructor(public service:ProdaddService) { }

  ngOnInit(): void {
  }

  adder(){
    this.service.adder();
  }
  
  add1()
  {
    this.service.add1();
  }


}

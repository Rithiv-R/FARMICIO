import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetlistsService } from 'src/app/services/getlists.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  itemarray:any;
  constructor(public route:ActivatedRoute,public service:GetlistsService) { }

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.itemarray = this.service.readproducts(name);
    console.log(this.itemarray);
  }

}

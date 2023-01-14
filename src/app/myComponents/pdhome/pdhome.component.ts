import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetproductService } from 'src/app/services/getproduct.service';

@Component({
  selector: 'app-pdhome',
  templateUrl: './pdhome.component.html',
  styleUrls: ['./pdhome.component.css']
})
export class PdhomeComponent implements OnInit {

  pid!:any;
  dict!:any;
  constructor(public route:ActivatedRoute,public service:GetproductService) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.dict = this.service.getProducts(this.pid);
  }

}

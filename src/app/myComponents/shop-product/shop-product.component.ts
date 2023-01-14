import { Component, OnInit,Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CartaddingService } from 'src/app/services/cartadding.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  @Input() item!:any;
  logged!:any;
  constructor(public au:AngularFireAuth,public service:CartaddingService,public route:Router) { }

  ngOnInit(): void {
    this.au.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.logged= true;
      }
      else{
        this.logged = false;
      }
    })
  }


  addtocart(id:any)
  {
    if(this.logged==true)
    {
        this.route.navigate(['product',id]);
    }
    else
    {
        this.route.navigate(['/signin',id]);
    }
  }

}

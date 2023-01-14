import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login1',
  templateUrl: './user-login1.component.html',
  styleUrls: ['./user-login1.component.css']
})
export class UserLogin1Component implements OnInit {

  pid:any;

  constructor(public service:AuthenticationService,public route:ActivatedRoute) {}

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('id');
  }

  signin1(email:string,password:string)
  {
    this.service.signin_s1(email,password,this.pid);
  }


}

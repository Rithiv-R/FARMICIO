import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-signup1',
  templateUrl: './user-signup1.component.html',
  styleUrls: ['./user-signup1.component.css']
})
export class UserSignup1Component implements OnInit {

  pid:any;
  constructor(public service:AuthenticationService,public route:ActivatedRoute) { }
  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
  }

  signup1(email:string,password:string)
  {
    this.service.signup_s1(email,password,this.pid);
  }

}

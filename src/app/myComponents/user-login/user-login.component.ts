import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
   this.service.signout();
  }

  signin(email:string,password:string)
  {
    this.service.signin_s(email,password);
  }


}

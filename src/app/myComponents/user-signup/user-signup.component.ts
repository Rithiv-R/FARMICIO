import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

  signup(email:string,password:string)
  {
    this.service.signup_s(email,password);
  }

}

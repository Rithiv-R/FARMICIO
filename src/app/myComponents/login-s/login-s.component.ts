import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-s',
  templateUrl: './login-s.component.html',
  styleUrls: ['./login-s.component.css']
})
export class LoginSComponent implements OnInit {

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

  signin(email:string,password:string)
  {
    this.service.signin_s(email,password);
  }

}

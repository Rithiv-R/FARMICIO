import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup-s',
  templateUrl: './signup-s.component.html',
  styleUrls: ['./signup-s.component.css']
})
export class SignupSComponent implements OnInit {

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

  signup(email:string,password:string)
  {
    this.service.signup_s(email,password);
  }

}

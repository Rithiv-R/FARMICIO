import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup-f',
  templateUrl: './signup-f.component.html',
  styleUrls: ['./signup-f.component.css']
})
export class SignupFComponent implements OnInit {

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

}

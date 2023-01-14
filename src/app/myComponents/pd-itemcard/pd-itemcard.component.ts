import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartaddingService } from 'src/app/services/cartadding.service';

@Component({
  selector: 'app-pd-itemcard',
  templateUrl: './pd-itemcard.component.html',
  styleUrls: ['./pd-itemcard.component.css']
})
export class PdItemcardComponent implements OnInit {

  @Input() item:any;
  email!:any;
  constructor(private auth:AngularFireAuth,public service:CartaddingService) {
    this.auth.authState.subscribe(userResponse=>{
      this.email = userResponse?.email;
    })
  }

  selectedinput!:string;

  ngOnInit(): void {
    this.selectedinput = '1';
  }

  selectChangeHandler (event: any) {
    this.selectedinput = event.target.value;
  }

  addorder()
  {
    this.service.adder(this.item.id,this.email,this.selectedinput,this.item.price);
  }

}

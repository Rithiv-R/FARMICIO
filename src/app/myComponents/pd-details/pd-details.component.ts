import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pd-details',
  templateUrl: './pd-details.component.html',
  styleUrls: ['./pd-details.component.css']
})
export class PdDetailsComponent implements OnInit {

  @Input() benefits!:string;
  @Input() benefits1!:string;
  @Input() des!:string;
  constructor() { }

  ngOnInit(): void {
  }

}

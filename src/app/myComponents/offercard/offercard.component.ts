import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-offercard',
  templateUrl: './offercard.component.html',
  styleUrls: ['./offercard.component.css']
})
export class OffercardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  code!: string;
  @Input()
  link!: string;


  constructor() { }

  ngOnInit(): void {
  }

}

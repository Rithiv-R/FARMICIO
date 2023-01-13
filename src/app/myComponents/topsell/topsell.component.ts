import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topsell',
  templateUrl: './topsell.component.html',
  styleUrls: ['./topsell.component.css']
})
export class TopsellComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  link!: string;
  @Input()
  prize!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

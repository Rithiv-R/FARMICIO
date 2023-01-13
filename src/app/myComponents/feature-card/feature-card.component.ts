import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input()
  content!: string;
  @Input()
  icon!: string;
  @Input()
  content2!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

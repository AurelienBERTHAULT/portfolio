import { Component, OnInit, Input, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'ab-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  @Input() label;
  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}

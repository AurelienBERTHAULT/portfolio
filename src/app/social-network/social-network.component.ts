import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {

  @Input() name;
  @Input() logo;
  @Input() link;


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {

  public socialNetworks;

  constructor() {
    this.socialNetworks = [
      {name: "Github", logo: "", link:"https://github.com/AurelienBERTHAULT"},
      {name: "Linkedin", logo: "", link:"https://www.linkedin.com/in/aurélien-berthault-53ab53a0"},
      {name: "Viadeo", logo: "", link:"http://www.viadeo.com/fr/profile/aurélien.berthault"},
    ]
  }

  ngOnInit() {
  }

}

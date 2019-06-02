import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems

  constructor() {
    this.menuItems = [
      {label:"Accueil", anchor:"home"},
      {label:"Compétences", anchor:"skills"},
      {label:"Expériences", anchor:"experiences"},
      {label:"Divers", anchor:"miscellaneous"}
    ]
  }

  ngOnInit() {
  }

}

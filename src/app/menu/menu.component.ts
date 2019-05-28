import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems
  public itemWidth

  constructor() {
    this.menuItems = [
      "Accueil",
      "Compétences",
      "Expériences",
      "Contact"
    ]
    this.itemWidth = 100/this.menuItems.length
  }

  ngOnInit() {
  }

}

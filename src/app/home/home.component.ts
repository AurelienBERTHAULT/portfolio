import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public details

  constructor() {
    this.details = [
      {label:"age", value:"29 ans"},
      {label:"adresse", value:"54190 Villerupt, FR"},
      {label:"e-mail", value:"aurelien.berthault@gmail.com"},
      {label:"employeur", value:"Interact-IV.com Lux (Esch-sur-Alzette, LU)"}
    ]
  }

  ngOnInit() {
  }

}

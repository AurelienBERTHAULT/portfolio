import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  public drivingLicenses;
  public passions;

  constructor() { 
    this.drivingLicenses = [
      "voiture (permis B)",
      "bateau (option côtière)"
    ]
    this.passions = [
      "football",
      "jeux vidéo",
      "mangas",
      "mode",
      "romans",
      "séries TV"
    ]
  }

  ngOnInit() {
  }

}

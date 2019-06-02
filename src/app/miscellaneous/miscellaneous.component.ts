import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  private drivingLicenses;
  private passions;

  constructor() { 
    this.drivingLicenses = [
      "voiture (permis B)",
      "bateau (option côtière)"
    ]
    this.passions = [
      "Football",
      "Jeux Vidéo",
      "Mangas",
      "Mode",
      "Romans",
      "Séries"
    ]
  }

  ngOnInit() {
  }

}

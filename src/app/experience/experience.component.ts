import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() type;
  @Input() place;
  @Input() missions;

  constructor() { }

  ngOnInit() {
  }

}

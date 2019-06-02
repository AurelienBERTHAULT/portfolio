import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  @Input() label;
  @Input() duration;
  @Input() details;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-timeline-year',
  templateUrl: './timeline-year.component.html',
  styleUrls: ['./timeline-year.component.css']
})
export class TimelineYearComponent implements OnInit {

  @Input() year;

  constructor() { }

  ngOnInit() {
  }

}

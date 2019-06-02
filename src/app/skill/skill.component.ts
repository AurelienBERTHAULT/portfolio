import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() logo;
  @Input() name;
  @Input() level;
  @Input() projects;
  private colorClass;
  
  constructor() { }

  ngOnInit() {
    this.colorClass = "level-" + this.level;
  }

}

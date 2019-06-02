import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills;

  constructor() {
    this.skills = [
      //pratique courante
      {logo:"", name:"Angular 2+", level:3, projects: []},
      {logo:"", name:"Angular Material", level:3, projects: []},
      {logo:"", name:"CSS", level:3, projects: []},
      {logo:"", name:"Cordova", level:3, projects: []},
      {logo:"", name:"Français", level:3, projects: []},
      {logo:"", name:"Github", level:3, projects: []},
      {logo:"", name:"Google Play Store‎", level:3, projects: []},
      {logo:"", name:"HTML", level:3, projects: []},
      {logo:"", name:"Ionic", level:3, projects: []},
      {logo:"", name:"JS", level:3, projects: []},
      {logo:"", name:"PHP", level:3, projects: []},
      {logo:"", name:"SQL", level:3, projects: []},

      //pratique occasionnelle      
      {logo:"", name:"Anglais (Bulats 90)", level:2, projects: []},
      {logo:"", name:"Angular CLI", level:2, projects: []},
      {logo:"", name:"Angular Universal", level:2, projects: []},
      {logo:"", name:"Apigility", level:2, projects: []},
      {logo:"", name:"Apple App Store", level:2, projects: []},
      {logo:"", name:"AWS EC2", level:2, projects: []},      
      {logo:"", name:"AWS Lambda", level:2, projects: []},      
      {logo:"", name:"AWS Route 53", level:2, projects: []},
      {logo:"", name:"Docker", level:2, projects: []},      
      {logo:"", name:"Extension Chrome", level:2, projects: []},      
      {logo:"", name:"Facebook API", level:2, projects: []},      
      {logo:"", name:"jQuery", level:2, projects: []},      
      {logo:"", name:"Quasar", level:2, projects: []},
      {logo:"", name:"Redux", level:2, projects: []},
      {logo:"", name:"Vue.js", level:2, projects: []},

      //connaissances théoriques
      {logo:"", name:"Functionnal Programming", level:1, projects: []},
      {logo:"", name:"Protractor", level:1, projects: []},

      //à découvrir
      {logo:"", name:"Jekyll", level:0, projects: []},
      {logo:"", name:"Karma", level:0, projects: []},
      {logo:"", name:"Méthodes Agiles", level:0, projects: []},
    ]
  }

  ngOnInit() {
  }

  getSkillsByLevel(level) {
    return this.skills.filter(skill => skill.level == level)
  }

}

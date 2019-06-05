import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CoverComponent } from './cover/cover.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experience/experience.component';
import { MissionComponent } from './mission/mission.component';
import { TimelineYearComponent } from './timeline-year/timeline-year.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { FooterComponent } from './footer/footer.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SocialNetworkComponent } from './social-network/social-network.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    CoverComponent,
    HomeComponent,
    HomeDetailComponent,
    SkillsComponent,
    SkillComponent,
    ExperiencesComponent,
    ExperienceComponent,
    MissionComponent,
    TimelineYearComponent,
    MiscellaneousComponent,
    FooterComponent,
    SocialNetworksComponent,
    SocialNetworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

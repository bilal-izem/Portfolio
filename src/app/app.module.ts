import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './sidenav/profile/profile.component';
import { EducationComponent } from './sidenav/education/education.component';
import { ExperiencesComponent } from './sidenav/experiences/experiences.component';
import { SkillsComponent } from './sidenav/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselConfig } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    SkillsComponent,
    CarouselComponent,


  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],

  providers: [{ provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

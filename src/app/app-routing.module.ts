import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './sidenav/experiences/experiences.component';
import { ProfileComponent } from './sidenav/profile/profile.component';
import { EducationComponent } from './sidenav/education/education.component';
import { SkillsComponent } from './sidenav/skills/skills.component';



const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"work", component:WorkComponent},
  {path:"contact", component:ContactComponent},
  {path:"profile", component:ProfileComponent, outlet: 'sidebar'},
  {path:"education", component:EducationComponent, outlet: 'sidebar'},
  {path:"experiences", component:ExperiencesComponent, outlet: 'sidebar'},
  {path:"skills", component:SkillsComponent, outlet: 'sidebar'},
  {path: '', redirectTo: '/home', pathMatch :'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

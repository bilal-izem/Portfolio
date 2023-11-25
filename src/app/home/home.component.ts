import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
downloadCV() {
const cvUrl = "/assets/IZEM Bilal CV IT.pdf";
const link = document.createElement('a');
link.href = cvUrl;
link.setAttribute('download', 'IZEM Bilal CV IT.pdf');
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
cards : {icon : string, title: string, description: string, class :string}[] = [
  {icon : 'fa-solid fa-palette' ,title: 'Web Design', description: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo e ante dict aptent taciti socios tincidunt et justo e ante dict aptent taciti socios',class: 'card1'},
  {icon :'fa-solid fa-laptop-code', title: 'Web Development', description: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo e ante dict aptent taciti socios tincidunt et justo e ante dict aptent taciti socios',class: 'card2'},
  {icon : 'fa-solid fa-list-check', title: 'Project Management', description: 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et justo e ante dict aptent taciti socios tincidunt et justo e ante dict aptent taciti socios',class: 'card3'}
];

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  isHovered = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }



  articles: {image: string; title : string ;text?: string}[] =  [
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/300.jpg',title :'Java', text: "Java est un langage de programmation populaire."},
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/140.jpg',title :'Python', text: "Python a de nombreux domaines d'application."},
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/100.jpg',title :'JavaScript', text: 'JavaScript est un langage de programmation.'},
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/101.jpg',title :'Angular', text: 'Angular est un framework open source JavaScript '}
  ];


  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }
  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);;
  }
}

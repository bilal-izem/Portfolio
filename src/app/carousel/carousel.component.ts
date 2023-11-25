import { Component } from '@angular/core';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: {image: string; title : string ;text: string ; icon : string}[] =  [
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/300.jpg',title :'guide to Java', text: "Java est un langage de programmation populaire et est utilisé à grande échelle dans le monde entier pour le développement d'applications.", icon: 'fa-brands fa-java'},
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/140.jpg',title :'guide to Python', text: "Python a de nombreux domaines d'application, contrairement à HTML ou JavaScript qui ne servent qu'au développement web." ,icon:'fa-brands fa-python'},
    {image: 'https://mdbcdn.b-cdn.net/img/new/slides/100.jpg',title :'guide to JavaScript', text: 'JavaScript est un langage de programmation qui permet de créer du contenu mis à jour de façon dynamique' , icon: 'fa-brands fa-square-js'}
  ];

  showIndicator = true;
}

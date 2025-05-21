import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Carousel} from "primeng/carousel";
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, Carousel,SharedModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  title = 'GFG';

  images= [
    {
      previewImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      thumbnailImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      alt: 'Cascading Style Sheet',
      title: 'CSS'
    },
    {
      previewImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      thumbnailImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      alt: 'Angular for Front end',
      title: 'Angular'
    },
    {
      previewImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      thumbnailImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      alt: 'Java Programming Language',
      title: 'Java'
    },
    {
      previewImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      thumbnailImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      alt: 'HyperText Markup Language',
      title: 'HTML'
    },
  ];
}

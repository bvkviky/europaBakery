import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Carousel} from "primeng/carousel";
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule, Carousel,SharedModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class GaleriaComponent {
  title = 'galeria';

  images= [
    {
      previewImageSrc:
          '/assets/images/bakery-left.png',
      thumbnailImageSrc:
  '/assets/images/bakery-left.png',
      alt: 'Cascading Style Sheet',

    },
    {
      previewImageSrc:
          '/assets/images/bakery-center.png',
      thumbnailImageSrc:
          '/assets/images/bakery-center.png',
      alt: 'Angular for Front end',

    },
    {
      previewImageSrc:
          '/assets/images/bakery-top 1.png',
      thumbnailImageSrc:
          '/assets/images/bakery-top 1.png',
      alt: 'Java Programming Language',

    },
    {
      previewImageSrc:
          '/assets/images/product_show.png',
      thumbnailImageSrc:
          '/assets/images/product_show.png',
      alt: 'HyperText Markup Language',
    },
  ];
}

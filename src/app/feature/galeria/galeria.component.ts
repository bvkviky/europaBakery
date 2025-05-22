import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Carousel} from "primeng/carousel";
import {SharedModule} from 'primeng/api';

@Component({
    selector: 'app-galeria',
    imports: [CommonModule, Carousel, SharedModule],
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.css'],
    host: {ngSkipHydration: 'true'},
})
export class GaleriaComponent {
    title = 'galeria';

    images = [
        {
            previewImageSrc:
                '/assets/images/unsplash_2-U0A2tNYhM.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_2-U0A2tNYhM.jpg',
            alt: 'Cascading Style Sheet',

        },
        {
            previewImageSrc:
                '/assets/images/unsplash_go3DT3PpIw4.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_go3DT3PpIw4.jpg',
            alt: 'Angular for Front end',

        },
        {
            previewImageSrc:
                '/assets/images/unsplash_jeYLZefL2Ak.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_jeYLZefL2Ak.jpg',
            alt: 'Java Programming Language',

        },
        {
            previewImageSrc:
                '/assets/images/unsplash_sqkXyyj4W.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_sqkXyyj4W.jpg',
            alt: 'HyperText Markup Language',
        },
        {
            previewImageSrc:
                '/assets/images/unsplash_sqkXyyj4WdE.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_sqkXyyj4WdE.jpg',
            alt: 'HyperText Markup Language',
        },
        {
            previewImageSrc:
                '/assets/images/unsplash_u4Gju8uXcgc.jpg',
            thumbnailImageSrc:
                '/assets/images/unsplash_u4Gju8uXcgc.jpg',
            alt: 'HyperText Markup Language',
        },
    ];
}

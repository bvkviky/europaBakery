import { Component, Inject, OnInit, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';

declare let window: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [NgIf],
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  loadMapIframe = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && window.cookieconsent) {
      window.cookieconsent.initialise({
        palette: {
          popup: { background: '#000' },
          button: { background: '#f1d600' },
        },
        theme: 'classic',
        type: 'opt-in',
        storage: 'none',
        content: {
          message:
            'Ez az oldal cookie-kat használ a Google Térkép megjelenítéséhez.',
          allow: 'Elfogadom',
          deny: 'Elutasítom',
          link: 'További információk',
          href: 'https://policies.google.com/privacy?hl=hu',
        },
        onInitialise: (status: string) => {
          this.ngZone.run(() => {
            this.loadMapIframe = status === 'allow';
          });
        },
        onStatusChange: (status: string) => {
          this.ngZone.run(() => {
            this.loadMapIframe = status === 'allow';
          });
        },
        revokable: true,
        dismissOnWindowClick: false,
        dismissOnTimeout: 0,
        dismissOnScroll: false,
      });
    }
  }
}

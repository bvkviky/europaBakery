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
    if (isPlatformBrowser(this.platformId)) {
      const waitForCookieConsent = setInterval(() => {
        if (window.cookieconsent && window.cookieconsent.initialise) {
          clearInterval(waitForCookieConsent);

          window.cookieconsent.initialise({
            palette: {
              popup: { background: '#1a1a1a' },
              button: { background: '#E3B577' }
            },
            theme: 'classic',
            type: 'opt-in',
            storage: 'none',
            revokable: true,
            content: {
              message: 'Ez a weboldal sütiket használ a Google Térkép megjelenítéséhez.',
              allow: 'Elfogadom',
              deny: 'Elutasítom',
              link: 'Adatkezelés',
              href: 'https://policies.google.com/privacy?hl=hu'
            },
            onInitialise: (status: string) => {
              this.ngZone.run(() => {
                this.loadMapIframe = window.cookieconsent.hasConsented('marketing');
              });
            },
            onStatusChange: (status: string) => {
              this.ngZone.run(() => {
                this.loadMapIframe = window.cookieconsent.hasConsented('marketing');
              });
            }
          });
        }
      }, 250);
    }
  }
}

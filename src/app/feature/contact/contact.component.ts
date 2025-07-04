import {
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgIf]
})
export class ContactComponent implements OnInit {
  loadMapIframe = false;
  showConsentBanner = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedConsent = localStorage.getItem('consent');

      if (storedConsent === 'accepted') {
        this.loadMapIframe = true;
      } else if (storedConsent === 'denied') {
        this.loadMapIframe = false;
      } else {
        this.showConsentBanner = true;
      }
    }
  }

  acceptCookies(): void {
    this.ngZone.run(() => {
      this.loadMapIframe = true;
      this.showConsentBanner = false;
      localStorage.setItem('consent', 'accepted');
    });
  }

  denyCookies(): void {
    this.ngZone.run(() => {
      this.loadMapIframe = false;
      this.showConsentBanner = false;
      localStorage.setItem('consent', 'denied');
    });
  }
}

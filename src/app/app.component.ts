import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from "./shared/component/navbar/navbar.component";
import {HomeComponent} from "./feature/home/home.component";
import {GaleriaComponent} from "./feature/galeria/galeria.component";
import {AboutusComponent} from "./feature/aboutus/aboutus.component";
import {ContactComponent} from "./feature/contact/contact.component";
import {FooterComponent} from "./feature/footer/footer.component";
import { NgcCookieConsentModule } from 'ngx-cookieconsent';



@Component({
    imports: [RouterModule, NavbarComponent, HomeComponent, GaleriaComponent, AboutusComponent, ContactComponent, FooterComponent,NgcCookieConsentModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'europafrisspekseg';
}

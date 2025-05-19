import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from "./shared/component/navbar/navbar.component";
import {HomeComponent} from "./feature/home/home.component";

@Component({
  imports: [RouterModule, NavbarComponent, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'bakery';
}

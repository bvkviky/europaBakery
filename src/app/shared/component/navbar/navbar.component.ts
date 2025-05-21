import {Component, HostListener} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
    imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isTop = true;

  get navbarClass(): string {
    return this.isTop
        ? 'flex fixed top-0 left-0 w-full px-5 justify-between p-20px transition-all duration-300'
        : 'flex fixed top-0 left-0 w-full bg-white/80 shadow-md shadow-black/30 px-5 z-[1000] justify-between p-20px transition-all duration-300';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTop = window.scrollY === 0;
  }
  getLinkClass(): string {
    return this.isTop
        ? 'text-[#E3B577] hover:text-[#834E20] transition'
        : 'text-[#534231] hover:text-[#E3B577] transition';
  }
}

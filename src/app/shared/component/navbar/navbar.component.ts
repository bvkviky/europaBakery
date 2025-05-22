import {Component, HostListener,} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';


@Component({
    selector: 'app-navbar',
    imports: [CommonModule, NgOptimizedImage, OverlayModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    isTop = true;
    isOpen = false;

  navigateTo(id: string) {
    this.isOpen = false;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

    get navbarClass(): string {
        return this.isTop
            ? 'flex fixed top-0 left-0 w-full px-5 justify-between p-20px transition-all duration-300 h-[60px]'
            : 'flex fixed top-0 left-0 w-full bg-white shadow-md shadow-black/30 px-5 z-[1000] justify-between p-20px transition-all duration-300 h-[60px]';
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isTop = window.scrollY === 0;
    }

    getLinkClass(): string {
        return this.isTop
            ? 'text-[#E3B577] hover:text-[#C3AA95] transition'
            : 'text-[#534231] hover:text-[#E3B577] transition';
    }
}

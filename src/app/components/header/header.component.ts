import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  langService = inject(LanguageService);

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(sectionId: string) {
    this.isMenuOpen = false; 
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  scrollToTop() {
    this.isMenuOpen = false;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}

/* import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- ESTO ES CLAVE

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // <--- DEBE ESTAR AQUÍ
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('¿Menú abierto?:', this.isMenuOpen); // Esto te ayudará a ver si el click funciona
  }
}

 */

import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common'; // Estos son los 2 que necesitamos aquí

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  // El "constructor" inyecta la herramienta para mover la pantalla
  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Esta función es la que llamaremos desde el HTML
  navigateTo(sectionId: string) {
    this.isMenuOpen = false; 
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  // --- AÑADE ESTA FUNCIÓN ---
  scrollToTop() {
    this.isMenuOpen = false; // Por si acaso el menú estaba abierto
    this.viewportScroller.scrollToPosition([0, 0]); // Sube a la coordenada 0,0
  }
}


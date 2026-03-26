import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
    misProyectos = [
    {
      id: 'tesis', // ID único
      titulo: 'Agencia de Viajes (Tesis UTN)',
      desc: 'A full-stack travel booking platform developed as a final thesis for UTN.',
      detalle: 'Desarrollo integral siguiendo el estándar IEEE 830. Incluye gestión de itinerarios, integración de APIs de mapas y clima, y metodología Scrum.',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      imagen: 'utn-viajes-hero.jpg', // Usa la ruta de tu imagen
      linkText: 'View Case Study',
      pdf: 'projects/tesis-utn.pdf' // Ruta al PDF
      
    },
    {
      id: 'cafeteria', // ID único
      titulo: 'Guía de Cafeterías (UX/UI)',
      desc: 'Deep UX research and UI design for a mobile guide helping enthusiasts find specialty coffee.',
      detalle: 'Investigación de usuarios, creación de wireframes de alta fidelidad y pruebas de usabilidad para mejorar la experiencia de búsqueda de café de especialidad.',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      imagen: 'cafeporahi.jpg',
      linkText: 'View Figma Prototype',
      pdf: null // Este no tiene PDF, quizás un link a Figma después
    }
    // ¡Acá podés agregar todos los que quieras en el futuro!
  ];
  // Propiedad para el proyecto seleccionado
  proyectoSeleccionado: any = null;

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarModal() {
    this.proyectoSeleccionado = null;
  }
}


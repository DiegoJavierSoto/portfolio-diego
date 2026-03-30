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
    id: 'bienestar-inteligente',
    titulo: 'Bienestar Inteligente',
    desc: 'Desarrollo integral de una Landing Page de alta conversión para el programa de formación vivencial Bienestar Inteligente.',
    detalle: 'Landing page enfocada en marca personal y conversión.',
    tags: ['Angular', 'Tailwind', 'UX/UI'],
    imagen: 'bienestar_1.jpg', // Asegúrate de que esta imagen esté en /public
    linkText: 'Ver Proyecto',
    pdf: 'projects/bienestar_int.pdf'
  },
    {
      id: 'tesis', // ID único
      titulo: 'Agencia de Viajes',
      desc: 'Plataforma integral de reservas de viajes desarrollada como tesis final para la UTN.',
      detalle: 'Desarrollo integral siguiendo el estándar IEEE 830. Incluye gestión de itinerarios, integración de APIs de mapas y clima, y metodología Scrum.',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      imagen: 'utn-viajes-hero.jpg', // Usa la ruta de tu imagen
      linkText: 'Ver Proyecto',
      pdf: 'projects/tesis-utn.pdf' // Ruta al PDF
      
    },
    {
      id: 'cafeteria', // ID único
      titulo: 'Guía de Cafeterías (UX/UI)',
      desc: 'Investigación exhaustiva de UX y diseño de UI para una guía móvil que ayuda a los entusiastas a encontrar café de especialidad..',
      detalle: 'Investigación de usuarios, creación de wireframes de alta fidelidad y pruebas de usabilidad para mejorar la experiencia de búsqueda de café de especialidad.',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      imagen: 'cafeporahi.jpg',
      linkText: 'Ver Caso de Estudio',
      pdf: null // Ruta al PDF
     // Este no tiene PDF, quizás un link a Figma después
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


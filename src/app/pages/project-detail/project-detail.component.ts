import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  proyecto: any;

  // Lista temporal (Igual a la de ProjectsComponent)
  misProyectos = [
  {
    id: 'bienestar-inteligente',
    titulo: 'Bienestar Inteligente',
    detalle: 'Desarrollo de una Landing Page profesional para la  Health Coach Silvina Calosso. El sitio incluye secciones de biografía, servicios de coaching, testimonios y una integración estratégica para la conversión de clientes. Se priorizó una estética limpia y una navegación intuitiva que refleje los valores de marca personal.',
    imagen: 'bienestar_1.jpg', 
    imagenDetalle: 'bienestar_2.jpg',
    urlViva: 'https://bienestar-inteligente.netlify.app/#',
    pdf: 'bienestar_int.pdf',
    tags: ['Angular', 'Tailwind', 'Netlify', 'UX/UI']
  },
  {
    id: 'cafeteria',
    titulo: 'Guía de Cafeterías (UX/UI)',
    detalle: 'Investigación profunda de usuarios, creación de wireframes de alta fidelidad y pruebas de usabilidad. Este proyecto se centra en resolver la necesidad de los entusiastas del café de especialidad para encontrar lugares únicos mediante una interfaz intuitiva y minimalista.',
    imagen: 'cafeporahi.jpg',
    imagenDetalle: 'cafeporahi_2.jpg', // Asegúrate de que este archivo exista en /public
    tags: ['Figma', 'UX Research', 'Prototyping']
  },
  {
    id: 'tesis',
    titulo: 'Plataforma de Agencia de Viajes',
    detalle: 'Proyecto de tesis final para el título de Técnico Universitario en Programación en la UTN. Se trata de una solución integral diseñada para la gestión turística, con integraciones de API en tiempo real y una interfaz de usuario (UI/UX) adaptable. El proceso de desarrollo siguió la metodología ágil Scrum, centrándose en la recopilación de requisitos según el estándar IEEE 830 para las Especificaciones de Requisitos de Software (SRS).',
    imagen: 'viajes_1.jpg', 
    imagenDetalle: 'viajes_2.jpg',
    pdf: 'tesis-utn.pdf',
    tags: ['Angular', 'TypeScript', 'Tailwind']
  }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capturamos el ID de la URL (ej: 'tesis')
    const id = this.route.snapshot.paramMap.get('id');
    // Buscamos el proyecto que coincida
    this.proyecto = this.misProyectos.find(p => p.id === id);
  }
}
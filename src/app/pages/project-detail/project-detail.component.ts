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
    titulo: 'University Travel Agency Platform',
    detalle: 'Final thesis project for University Technician in Programming at UTN. A full-stack solution designed for tourism management, featuring real-time API integrations and a responsive UI/UX. The development process followed Scrum agile methodologies, focusing on requirements gathering under the IEEE 830 standard for Software Requirements Specifications (SRS).',
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
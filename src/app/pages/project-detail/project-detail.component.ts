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
    {// En el array misProyectos del project-detail.component.ts:

  id: 'tesis',
  titulo: 'University Travel Agency Platform', // Título más descriptivo
  detalle: 'Final thesis project for University Technician in Programming at UTN. A full-stack solution designed for tourism management, featuring real-time API integrations and a responsive UI/UX. The development process followed Scrum agile methodologies, focusing on requirements gathering under the IEEE 830 standard for Software Requirements Specifications (SRS).',
  imagen: 'web_agencia.jpg', 
  imagenDetalle: 'utn-viajes-hero.jpg',// Tu captura principal
  pdf: 'tesis-utn.pdf',
  tags: ['Angular', 'TypeScript', 'Tailwind']

    },
    {
      id: 'cafeteria',
      titulo: 'Guía de Cafeterías (UX/UI)',
      detalle: 'Investigación de usuarios y wireframes...',
      imagen: 'projects/cafeterias_web.jpg',
      tags: ['Figma', 'UX Research']
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
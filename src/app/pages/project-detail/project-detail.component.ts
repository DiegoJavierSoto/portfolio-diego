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
      id: 'tesis',
      titulo: 'Agencia de Viajes (Tesis UTN)',
      detalle: 'Desarrollo integral siguiendo el estándar IEEE 830...',
      imagen: 'projects/web_agencia.jpg',
      pdf: 'projects/tesis-utn.pdf',
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
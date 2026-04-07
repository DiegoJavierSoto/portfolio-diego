import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projectService = inject(ProjectService);
  misProyectos: Project[] = [];

  ngOnInit() {
    this.misProyectos = this.projectService.getProjects();
  }

  // Propiedad para el proyecto seleccionado
  proyectoSeleccionado: any = null;

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarModal() {
    this.proyectoSeleccionado = null;
  }
}


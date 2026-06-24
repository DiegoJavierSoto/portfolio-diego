import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projectService = inject(ProjectService);
  langService = inject(LanguageService);

  // Expose the signal containing localized projects
  misProyectos = this.projectService.getProjects();

  proyectoSeleccionado: any = null;

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarModal() {
    this.proyectoSeleccionado = null;
  }
}

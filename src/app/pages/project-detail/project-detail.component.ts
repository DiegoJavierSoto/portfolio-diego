import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  projectService = inject(ProjectService);
  proyecto: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capturamos el ID de la URL (ej: 'tesis')
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Buscamos el proyecto que coincida a través del servicio
      this.proyecto = this.projectService.getProjectById(id);
    }
  }
}
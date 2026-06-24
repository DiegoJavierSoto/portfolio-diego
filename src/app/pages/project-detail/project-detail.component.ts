import { Component, OnInit, inject, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { LanguageService } from '../../services/language.service';
import { ResolvedProject } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  projectService = inject(ProjectService);
  langService = inject(LanguageService);
  
  proyecto: Signal<ResolvedProject | undefined> = signal(undefined);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.proyecto = this.projectService.getProjectById(id);
    }
  }
}
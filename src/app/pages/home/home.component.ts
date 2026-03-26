import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Útil para directivas básicas
import { ProjectsComponent } from '../../components/projects/projects.component'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent], // Aquí le das permiso de usar el componente de proyectos
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Aquí puedes poner lógica más adelante si quieres
}
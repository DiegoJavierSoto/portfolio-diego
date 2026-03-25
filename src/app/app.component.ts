import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Importante: la ruta al archivo
import { ProjectsComponent } from './components/projects/projects.component';


@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que diga true
  imports: [
    RouterOutlet, 
    HeaderComponent,
    ProjectsComponent,  // Todo dentro de un mismo par de corchetes []
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-diego';
}
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Tu Home actual
  { path: 'proyecto/:id', component: ProjectDetailComponent }, // La página de cada proyecto
  { path: '**', redirectTo: '' } // Redirigir al home si la ruta no existe
];
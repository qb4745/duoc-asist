import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'student',
    loadComponent: () => import('./pages/student/student.page').then( m => m.StudentPage)
  },
  {
    path: 'student/:id',
    loadComponent: () => import('./pages/student/student.page').then( m => m.StudentPage)
  },
  {
    path: 'professor',
    loadComponent: () => import('./pages/professor/professor.page').then( m => m.ProfessorPage)
  },
  {
    path: 'professor/:id',
    loadComponent: () => import('./pages/professor/professor.page').then( m => m.ProfessorPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./pages/registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'schedule-details',
    loadComponent: () => import('./pages/student/schedule-details/schedule-details.page').then( m => m.ScheduleDetailsPage)
  },
  {
    path: 'schedule-details/:id',
    loadComponent: () => import('./pages/student/schedule-details/schedule-details.page').then( m => m.ScheduleDetailsPage)
  },
  {
    path: 'horarios',
    loadComponent: () => import('./pages/professor/horarios/horarios.page').then( m => m.HorariosPage)
  },
  {
    path: 'horarios/:id',
    loadComponent: () => import('./pages/professor/horarios/horarios.page').then( m => m.HorariosPage)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }


];

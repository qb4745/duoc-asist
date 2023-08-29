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
    path: 'professor',
    loadComponent: () => import('./pages/professor/professor.page').then( m => m.ProfessorPage)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

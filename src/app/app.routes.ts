import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'question1',
    loadComponent: () =>
      import('./components/question1/question1.component').then(m => m.Question1Component)
  },
  {
    path: 'question2',
    loadComponent: () =>
      import('./components/question2/question2.component').then(m => m.Question2Component)
  },
  {
    path: 'question3',
    loadComponent: () =>
      import('./components/question3/question3.component').then(m => m.Question3Component)
  },
  {
    path: 'question4',
    loadComponent: () =>
      import('./components/question4/question4.component').then(m => m.Question4Component)
  },
  {
    path: 'question5',
    loadComponent: () =>
      import('./components/question5/question5.component').then(m => m.Question5Component)
  },
  {
    path: '',
    redirectTo: 'question1',
    pathMatch: 'full'
  }
];
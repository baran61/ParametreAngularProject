import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navigation">
      <button routerLink="/question1">Question 1</button>
      <button routerLink="/question2">Question 2</button>
      <button routerLink="/question3">Question 3</button>
      <button routerLink="/question4">Question 4</button>
      <button routerLink="/question5">Question 5</button>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shared/styles/_common.scss']
})
export class AppComponent {}
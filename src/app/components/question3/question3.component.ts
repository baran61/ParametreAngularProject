import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../../ui/card-list.component';

// Router üzerinden sayfa görüntülenmesi
@Component({
  selector: 'app-question3',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  template: `
    <h1>Question 3 - Kartlar</h1>
    <app-card-list></app-card-list>
  `
})
export class Question3Component {}
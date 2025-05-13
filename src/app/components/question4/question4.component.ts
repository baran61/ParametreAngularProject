import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexibleCardComponent } from '../../shared/components/flexible-card.component';

interface Book {
  id: number;
  name: string;
}

@Component({
  selector: 'app-question4',
  standalone: true,
  imports: [CommonModule, FlexibleCardComponent],
  template: `
    <app-flexible-card
      [title]="'Kitap Listesi'"
      [items]="books"
      (onAdd)="addBook()"
      (onRemove)="removeBook($event)"
    >
      <ng-template let-book let-onRemove="onRemove">
        <div class="list-item">
          <span>{{ book.name }}</span>
          <button (click)="onRemove()">Sil</button>
        </div>
      </ng-template>
    </app-flexible-card>
  `,
})
export class Question4Component {
  books: Book[] = [
    { id: 1, name: 'Angular Essentials' },
    { id: 2, name: 'Learn React in 3 Steps' },
    { id: 3, name: 'TypeScript Deep Dive' },
    { id: 4, name: 'OOP Systems ' },
  ];

  addBook(): void {
    const newBook: Book = {
      id: Date.now(),
      name: 'Yeni Kitap ' + (this.books.length + 1),
    };
    this.books = [...this.books, newBook];
  }

  removeBook(book: Book): void {
    this.books = this.books.filter((b) => b.id !== book.id);
  }
}

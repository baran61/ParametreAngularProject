import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItem } from '../models/card-models/card.model';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <ul>
        <li *ngFor="let i of items">
          <strong>{{ i.title }}:</strong> {{ i.description }}
          <button (click)="onRemove(i)">Sil</button>
        </li>
      </ul>
      <button (click)="onAdd()">Ekle</button>
    </div>
  `,
  styleUrls: ['../../shared/styles/card-styles.scss']
})
export class SharedCardComponent {
  @Input() title: string = '';
  @Input() items: CardItem[] = [];
  @Output() remove = new EventEmitter<CardItem>();
  @Output() add = new EventEmitter<void>();

  onRemove(item: CardItem): void {
    this.remove.emit(item);
  }

  onAdd(): void {
    this.add.emit();
  }
}
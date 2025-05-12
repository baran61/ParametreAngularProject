import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../components/list-item.components'; // Tekrar kullanım için

@Component({
  selector: 'app-flexible-card',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  template: `
    <div class="card">
      <h2>{{ title }}</h2>

      <ng-container *ngFor="let item of items">
        <app-list-item [item]="item" (remove)="onRemove.emit(item)"></app-list-item> 
      </ng-container>

      <button (click)="onAdd.emit()">Ekle</button>
    </div>
  `,
  styleUrls: ['../../shared/styles/card-styles.scss']
})
export class FlexibleCardComponent<T> {
  @Input() title: string = '';
  @Input() items: T[] = [];
  @Output() onAdd = new EventEmitter<void>();
  @Output() onRemove = new EventEmitter<T>();
}

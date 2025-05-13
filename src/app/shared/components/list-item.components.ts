import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-item">
      <span>{{ item?.name }}</span>
      <button (click)="remove.emit()">Sil</button>
    </div>
  `
})
export class ListItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<void>();
}
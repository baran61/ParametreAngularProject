import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCardItem } from '../../shared/models/card-models/c-card.model';
import { SharedCardComponent } from '../../shared/components/card.components';

@Component({
  selector: 'app-c-card',
  standalone: true,
  imports: [CommonModule, SharedCardComponent],
  template: `
    <app-shared-card
      [title]="'A Kartı'"
      [items]="items"
      (remove)="remove.emit($event)"
      (add)="add.emit()"
    ></app-shared-card>
  `,
  styleUrls: ['../../shared/styles/card-styles.scss']
})
export class CCardComponent {
  @Input() items: CCardItem[] = [];
  @Output() remove = new EventEmitter<CCardItem>();
  @Output() add = new EventEmitter<void>();
}
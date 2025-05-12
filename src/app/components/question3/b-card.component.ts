import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCardItem } from '../../shared/models/card-models/b-card.model';
import { SharedCardComponent } from '../../shared/components/card.components';

@Component({
  selector: 'app-b-card',
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
export class BCardComponent {
  @Input() items: BCardItem[] = [];
  @Output() remove = new EventEmitter<BCardItem>();
  @Output() add = new EventEmitter<void>();
}

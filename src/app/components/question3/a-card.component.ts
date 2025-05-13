// src/app/components/a-card/a-card.component.ts
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACardItem } from '../../shared/models/card-models/a-card.model';
import { SharedCardComponent } from '../../ui/card.components';

@Component({
  selector: 'app-a-card',
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
export class ACardComponent {
  @Input() items: ACardItem[] = [];
  @Output() remove = new EventEmitter<ACardItem>();
  @Output() add = new EventEmitter<void>();
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeHttpService } from '../data-access/fake-http.service'
import { CardItem } from '../shared/models/card-models/card.model';
import { SharedCardComponent } from './card.components';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, SharedCardComponent],
  template: `
    <div class="card-list">
      <app-shared-card
        [title]="'A Kartı'"
        [items]="cardA"
        (add)="handleAdd('A')"
        (remove)="handleRemove('A', $event)"
      ></app-shared-card>

      <app-shared-card
        [title]="'B Kartı'"
        [items]="cardB"
        (add)="handleAdd('B')"
        (remove)="handleRemove('B', $event)"
      ></app-shared-card>

      <app-shared-card
        [title]="'C Kartı'"
        [items]="cardC"
        (add)="handleAdd('C')"
        (remove)="handleRemove('C', $event)"
      ></app-shared-card>
    </div>
  `,
  styleUrls: ['../shared/styles/card-styles.scss']
})
export class CardListComponent implements OnInit {
  cardA: CardItem[] = [];
  cardB: CardItem[] = [];
  cardC: CardItem[] = [];

  constructor(private http: FakeHttpService) {}

  // Her Kart için tipine göre 5 veri döner.(Observable metodu burada kullanıldı !)
  ngOnInit(): void {
    this.http.getItemsByType('A', 5).subscribe(data => this.cardA = data);
    this.http.getItemsByType('B', 5).subscribe(data => this.cardB = data);
    this.http.getItemsByType('C', 5).subscribe(data => this.cardC = data);
  }


  // Ekleme işlemi kategorisine göre 
  
  handleAdd(type: 'A' | 'B' | 'C'): void {
    this.http.getSingleItemByType(type).subscribe(newItem => {
      if (type === 'A') {
        this.cardA = [...this.cardA, newItem];
      } else if (type === 'B') {
        this.cardB = [...this.cardB, newItem];
      } else if (type === 'C') {
        this.cardC = [...this.cardC, newItem];
      }
    });
  }

  // Silme işlemi kategorisine göre

  handleRemove(type: 'A' | 'B' | 'C', item: CardItem): void {
    if (type === 'A') {
      this.cardA = this.cardA.filter(i => i.id !== item.id);
    } else if (type === 'B') {
      this.cardB = this.cardB.filter(i => i.id !== item.id);
    } else if (type === 'C') {
      this.cardC = this.cardC.filter(i => i.id !== item.id);
    }
  }
}
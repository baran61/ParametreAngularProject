import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { Question1DataService } from './question1-data.service';
import { Tree } from './question1.model';
import { uniqueValues } from '../../shared/utils/array.utils';

@Component({
  selector: 'app-question1',
  standalone: true,
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss'],
  imports: [CommonModule, FormsModule, MultiSelectModule, TableModule],
  providers: [Question1DataService]
})
export class Question1Component implements OnInit {
  trees: Tree[] = [];
  filteredTrees: Tree[] = [];

  selectedName: string[] = [];
  selectedScientific: string[] = [];
  selectedCondition: string[] = [];
  selectedHeight: string[] = [];
  selectedDbh: string[] = [];

  optionsName: string[] = [];
  optionsScientific: string[] = [];
  optionsCondition: string[] = [];
  optionsHeight: string[] = [];
  optionsDbh: string[] = [];

  constructor(private treeService: Question1DataService) {}

  ngOnInit(): void {
    this.treeService.getTrees().subscribe(data => {
      console.log('Gelen veri:', data);   // Veri geliyor mu konsol üzerinden kontrol işlemi
      this.trees = data;
      this.filteredTrees = data;
      this.setFilterOptions(data);
    });
  }

  // Filtreleme seçenekleri

  setFilterOptions(data: Tree[]) {
    this.optionsName = uniqueValues(data, 'Cmn_Name');
    this.optionsScientific = uniqueValues(data, 'Sci_Name');
    this.optionsCondition = uniqueValues(data, 'Condition');
    this.optionsHeight = uniqueValues(data, 'Height').filter(Boolean).map(String);
    this.optionsDbh = uniqueValues(data, 'DBH1').filter(Boolean).map(String);
  }

  // Filtreleme methodu

  applyFilters() {
    const filtered = this.trees.filter(tree =>
      (this.selectedName.length === 0 || this.selectedName.includes(tree.Cmn_Name)) &&
      (this.selectedScientific.length === 0 || this.selectedScientific.includes(tree.Sci_Name)) &&
      (this.selectedCondition.length === 0 || this.selectedCondition.includes(tree.Condition)) &&
      (this.selectedHeight.length === 0 || this.selectedHeight.includes(tree.Height?.toString())) &&
      (this.selectedDbh.length === 0 || this.selectedDbh.includes(tree.DBH1?.toString()))
    );

    this.filteredTrees = filtered;
    this.setFilterOptions(filtered);
  }
}

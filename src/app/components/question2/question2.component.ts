import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

interface Task {
  id: number;
  type: string;
  content: string;
  assignee: string;
  status: 'Süreçte' | 'Onaylandı';
}

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ChartModule,
  ],
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss'],
})
export class Question2Component {
  form: FormGroup;
  tasks: Task[] = [];
  taskIdCounter = 1;

  types = [
    { label: 'Yazılım', value: 'Geliştirme' },
    { label: 'Tasarım', value: 'Tasarım' },
    { label: 'Test', value: 'Test' },
    { label: 'Araştırma', value: 'Araştırma' },
    { label: 'Harita', value: 'Harita' },
    { label: 'Eğitim', value: 'Eğitim' },
  ];
  users = [
    { label: 'Baran', value: 'Baran' },
    { label: 'Fatih', value: 'Fatih' },
    { label: 'Begüm', value: 'Begüm' },
  ];

  chartData: any;
  chartOptions: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      content: ['', Validators.required],
      assignee: ['', Validators.required],
    });
    this.updateChart();
  }
  
  // Görev ekleme
  addTask(): void {
    if (this.form.valid) {
      const newTask: Task = {
        id: this.taskIdCounter++,
        type: this.form.value.type,
        content: this.form.value.content,
        assignee: this.form.value.assignee,
        status: 'Süreçte',
      };
      this.tasks.push(newTask);
      this.form.reset();
      this.updateChart();
    } else {
      this.form.markAllAsTouched();
    }
  }

  approveTask(task: Task): void {
    task.status = 'Onaylandı';
    this.tasks = [...this.tasks]; // dizi gğncelleniyor
    this.updateChart(); //  Grafiği güncelle
  }

  //Chart
  updateChart(): void {
  const grouped: Record<string, number> = {};

  // Sadece süreçte olan taskları chart'a kaydet
  for (const task of this.tasks) {
    if (task.status === 'Süreçte') {
      if (!grouped[task.assignee]) {
        grouped[task.assignee] = 0;
      }
      grouped[task.assignee]++;
    }
  }
  // Görevleri gruplama işlemi
  const labels = Object.keys(grouped);
  const data = labels.map(label => grouped[label]);

  this.chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#42A5F5', '#FFA726', '#66BB6A'],
        hoverBackgroundColor: ['#64B5F6', '#FFB74D', '#81C784']
      }
    ]
  };

  this.chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label;
            const value = grouped[label];
            return `${label}: ${value} Süreçte görev`;
          }
        }
      }
    }
  };
  // En son güncelleme
  this.chartData = { ...this.chartData };
  this.chartOptions = { ...this.chartOptions };
}
}

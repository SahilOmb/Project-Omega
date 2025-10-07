
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AnalyticsData {
  label: string;
  value: number;
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Analytics Dashboard</h1>
      
      <div class="cards">
        <div class="card" *ngFor="let data of analytics">
          <div class="label">{{ data.label }}</div>
          <div class="value">{{ data.value }}</div>
        </div>
      </div>

      <p *ngIf="analytics.length === 0" class="empty">
        No analytics data available.
      </p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 900px;
      margin: 40px auto;
      padding: 30px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }

    h1 {
      text-align: center;
      color: #1e40af;
      font-size: 2rem;
      margin-bottom: 25px;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      background: #f3f4f6;
      padding: 20px 30px;
      border-radius: 10px;
      text-align: center;
      width: 200px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s, background 0.2s;
    }

    .card:hover {
      transform: translateY(-4px);
      background: #e0f2fe;
    }

    .label {
      font-weight: 500;
      color: #374151;
      margin-bottom: 10px;
    }

    .value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e3a8a;
    }

    .empty {
      text-align: center;
      color: #6b7280;
      margin-top: 40px;
    }
  `]
})
export class AnalyticsComponent {
  analytics: AnalyticsData[] = [
    { label: 'Total Users', value: 120 },
    { label: 'Total Exams', value: 15 },
    { label: 'Questions Added', value: 350 },
    { label: 'Active Sessions', value: 42 }
  ];
}

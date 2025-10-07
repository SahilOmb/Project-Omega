

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
  imports: [CommonModule],

  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
  
  students = [
    { id: 1, name: 'Saloni Shivnur', email: 'saloni@example.com', course: 'Java' },
    { id: 2, name: 'Rahul Patil', email: 'rahul@example.com', course: 'Python' },
    { id: 3, name: 'Anita Deshmukh', email: 'anita@example.com', course: 'Angular' },
  ];
  totalStudents = 120;
totalExams = 45;
totalSubjects = 8;
completedExams = 32;

}



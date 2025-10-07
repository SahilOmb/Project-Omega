import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Exam {
  name: string;
  date: string;
}

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exams.html',
  styleUrls: ['./exams.css']
})
export class ExamComponent {
  exams: Exam[] = [];
  newExam: Exam = { name: '', date: '' };

  addExam() {
    if (!this.newExam.name.trim() || !this.newExam.date) return;
    this.exams.push({ ...this.newExam });
    this.newExam = { name: '', date: '' };
  }

  deleteExam(exam: Exam) {
    if (confirm(`Are you sure you want to delete the exam "${exam.name}"?`)) {
      this.exams = this.exams.filter(e => e !== exam);
    }
  }
}

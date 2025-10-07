import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subjects.html',
  styleUrls: ['./subjects.css']
})
export class Subjects {
  subjects: string[] = [];
  newSubject: string = '';

  addSubject() {
    if (this.newSubject.trim()) {
      this.subjects.push(this.newSubject);
      this.newSubject = '';
    }
  }

  deleteSubject(subject: string) {
    this.subjects = this.subjects.filter(s => s !== subject);
  }
}

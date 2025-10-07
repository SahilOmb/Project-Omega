import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface User {
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin' | string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users {
  users: User[] = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'student' },
    { name: 'Rahul Mehta', email: 'rahul@example.com', role: 'teacher' },
  ];

  model: User = this.emptyModel();
  editing = false;
  editingIndex: number | null = null;
  filter: string = '';

  emptyModel(): User {
    return { name: '', email: '', role: 'student' };
  }

  saveUser() {
    if (!this.model.name.trim() || !this.model.email.trim()) return;

    if (this.editing && this.editingIndex !== null) {
      this.users[this.editingIndex] = { ...this.model };
    } else {
      this.users = [...this.users, { ...this.model }];
    }

    this.resetForm();
  }

  startEdit(user: User, index: number) {
    this.model = { ...user };
    this.editing = true;
    this.editingIndex = index;
  }

  deleteUser(index: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter((_, i) => i !== index);
      // if we were editing this user, reset form
      if (this.editingIndex === index) this.resetForm();
    }
  }

  resetForm() {
    this.model = this.emptyModel();
    this.editing = false;
    this.editingIndex = null;
  }

  initials(name: string) {
    return (name || '').split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
  }

  get filteredUsers(): User[] {
    const q = this.filter.trim().toLowerCase();
    if (!q) return this.users;
    return this.users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q));
  }
}



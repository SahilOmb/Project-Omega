import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-sign',
  imports: [FormsModule, HttpClientJsonpModule],
  templateUrl: './sign.html',
  styleUrl: './sign.css'
})
@Injectable({providedIn: 'root'})
export class Sign {
  fullname = '';
  email = '';
  password = '';

  constructor(private router: Router, private UserService: UserService) {}

  onSignUpSuccess() {
    const user = {
      fullname: this.fullname,
      email: this.email,
      password: this.password
    };

    this.UserService.register(user).subscribe({
      next: response => {
        console.log('Registration success', response);
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
 
}

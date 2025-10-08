import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
constructor(private router: Router, private userService: UserService){}

userData: any ={};
public login(form: NgForm): void{
  console.log(form.value);
if(form.invalid){
  console.log(`form is invalid`);
  return;
}
this.userService.login(form.value).subscribe({
  next: (response: any) =>{
    console.log(`login sucessfull.`);
    //this.userService.setAuthToken(response.token);
    this.router.navigate([`/dashboard`]);
  },
  error:(err: any) => {
      console.log(`login failed`, err);
  }
});


}
}




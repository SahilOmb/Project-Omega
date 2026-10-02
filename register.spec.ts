import { Component, importProvidersFrom, inject, Injectable } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Router } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { UserService } from '../userservice';
@Component({
  imports: [FormsModule,HttpClientModule],
  standalone:true,
  selector: 'app-register',
  templateUrl: './register.html', 
  styleUrls: ['./register.css']
 
})
export class Register {
  userData: any={};
  
  constructor(private userService:UserService, private route:Router){

  }
 
  register(form:NgForm) {
    console.log("Register function called",form.value);

     this.userService.addUser(form.value).subscribe(
    (resp:any)=>{
        console.log(resp);
        alert("data Added Sucessfully...!");
        this.route.navigate(['/']);
       
      },
      (err:any )=>{
        console.log(err);
      }
    );
    
  }
}
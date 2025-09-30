import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  imports: [],
  templateUrl: './sign.html',
  styleUrl: './sign.css'
})
export class Sign {
constructor(private router: Router){}

onSignUpSuccess(){
  this.router.navigate(['/login']) 
}

redirectToLogin(){
  this.router.navigate(['/login']);
}

}

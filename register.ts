import { Component, Injectable } from '@angular/core';
import { UserService } from '../user';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';


@Component({
  imports:[FormsModule,HttpClientJsonpModule],
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

@Injectable({ providedIn:'root'})
export class Register {
 name: string = '';
  email: string = '';
  password: string = ''
constructor(private userService:UserService, private route:Router){

}

  register(userData: any) {
    console.log("register");
    console.log(userData.value);
    this.userService.addUser(userData.value).subscribe(
    (resp)=>{
      console.log(resp);
      alert("data Added successfhil ");
      this.route.navigate(['/']);

    },
    (err)=>{
      console.log(err);
    }
  );
  }
}




<p>login works!</p>
<form #logData="ngForm" (ngSubmit)="login(logData)">
    <h3>enter name</h3>
    <input type="text" id="userName" name="userName" #userName (ngModel)="userName"><br>

     <h3>enter email</h3>
    <input type="email" id="email" name="email" #email (ngModel)="email"><br>

     <h3>enter password</h3>
    <input type="password" id="password" name="password" #password (ngModel)="password"><br>

     
<br>
    <input type="submit" value="Submit">
    
</form>



  submittedData: string='';


  
  login(logData : any){
    console.log("login");
    console.log(logData.value);
  
  }



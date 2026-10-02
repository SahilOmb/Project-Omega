import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Route, Router } from '@angular/router';
import { UserService } from '../userservice';


@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
userData:any
  userService: any;
  route: any;
  
constructor(private Userservice:UserService,private router:Router){}
  ngOnInit(){
    this.userList();

  }
public userList(){
  this.Userservice.getUsers().subscribe
  ((response:any)=>{
    this.userData=response;
    console.log(response);
  },
  (err:any)=>{
    console.log(err);
  }
)
}
delete(id:any){
  if(confirm("Do you want to delete details..")){
    this.Userservice.delete(id).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.userList();
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

}
updateeg(pid:any){
  this.router.navigate([/update/${pid}]);
}

}
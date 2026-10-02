import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../userservice';



@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
constructor(private userService:UserService,private route:Router,private router:ActivatedRoute){}
id:any;
userResp:any;
ngOnInit()
{
  this.userService.getUser(this.router.snapshot.params[`id`]).subscribe((resp)=>{
    console.log(resp);
    this.userResp=resp;
    this.id=this.router.snapshot.params[`id`];
  },
  (err)=>{
    console.log(err);
  });
}

  updateeg(updateData:any)
  {
    
  this.userService.updateeg(this.id,updateData.value).subscribe(
    (resp)=> {
      console.log(resp);
      alert('Data updated successfully!');
      this.route.navigate(['/']);
    },
    (err) => {
      console.error(err);
    }
  );
}

}


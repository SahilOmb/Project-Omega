import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  update(id: any, userResp: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl:any="http://localhost:8080/user/api"

  constructor(private http:HttpClient){

  }
  public addUser(userData:any){
  return this.http.post(this.baseUrl+`/register`,userData);
  }
  public getUsers(){
    return this.http.get(this.baseUrl+`/list`);
  }
  public delete(uid:any){
    return this.http.delete(this.baseUrl+`/delete/${uid}`);
  }
  public updateeg(id:any,devData:any){
    return this.http.put(this.baseUrl+`/update/${id}`,devData);
  }
  public getUser(id:any){
    return this.http.get(this.baseUrl+`/getUser/${id}`);
  }
  
}
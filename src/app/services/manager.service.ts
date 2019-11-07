import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:4201/";
  users;
  courses;
  request;

  prepare(req){
    this.request = req
  }

  refresh() {
    this.http.get<any>(this.url+"user").subscribe((data)=>{
      this.users = data;
      //console.log("users",this.users)
    })

    this.http.get<any>(this.url+"course").subscribe((data)=>{
      this.courses = data;
      //console.log("courses",this.courses)
    })

  }

  getUsers() {
    return this.users
  }

  getCourses() {
    return this.courses
  }

  submit() {
    return this.http.post<any>(this.url+this.request.url,this.request.data,httpOptions)
    
  }

}

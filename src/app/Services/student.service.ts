import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentLogin } from '../istudent-login';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:44186/api/Student/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};


  constructor(private httpclient:HttpClient) { }

  addStudent(student:any):Observable<any> {
    return this.httpclient.post<any>(this.url + 'AddStudent',student, this.httpOptions)
  }

  checkStudent(login:IStudentLogin):Observable<any>{
    return this.httpclient.post<IStudentLogin>(this.url + 'StudentLogin' ,login ,this.httpOptions)
  }
  getStudent(id:number):Observable<any>{
     return this.httpclient.get<any>(this.url+'StudentDetails/'+id)
 }

  checkstatus(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url+'ApprovalStatus/'+id)
  }
  checkSchApplication(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url + 'FindStudentStatus/'+id)
  }
  checkInsStatus(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url + 'InsStatus/'+id)
  }
}

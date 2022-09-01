import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApplication } from '../iapplication';

//Service to add or fetch scholarship applications from the backend

@Injectable({
  providedIn: 'root'
})
export class SchAppService {
  url='http://localhost:44186/api/ScholarshipApplication/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
    constructor(private httpclient:HttpClient) { }
  
    addSchApplication(SchApplication:any):Observable<any>{
      return this.httpclient.post<any>(this.url + 'AddScholarshipApplication' ,SchApplication , this.httpOptions)
    }
   
  
    getSchApplication(id:number):Observable<any>{
      return this.httpclient.get<IApplication>(this.url + 'FindScholarshipApplication/'+id)
    }
}

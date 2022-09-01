import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IInstitute } from '../iinstitute';
import { IInstituteLogin } from '../iinstitute-login';
// This service is used to provide services related to InstituteService
// it calls methods of institut controller in backend

@Injectable({
  providedIn: 'root'
})

  export class InstituteService {
    url='http://localhost:44186/api/Institute/';
    httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
    constructor(private httpclient:HttpClient) { }
  
    addInstitute(institute:any):Observable<any>{
      return this.httpclient.post<any>(this.url + 'AddInstitute' ,institute , this.httpOptions)
    }
  
    checkInstitute(login:IInstituteLogin):Observable<any>{
      return this.httpclient.post<IInstituteLogin>(this.url + 'InstituteLogin' ,login ,this.httpOptions)
    }
    getInstituteApproval(id:number):Observable<any>{
      console.log("inside service"+id)
      return this.httpclient.get<IInstitute>(this.url+'ApprovalStatus/'+id)
    }
  
    getInstitute(id:number):Observable<any>{
      console.log("inside service"+id)
      return this.httpclient.get<IInstitute>(this.url+'InstituteDetails/'+id).pipe(catchError(this.handleError))
    }
  
    handleError(err:HttpErrorResponse){
      return throwError(err.error)
    }
  
    
    }


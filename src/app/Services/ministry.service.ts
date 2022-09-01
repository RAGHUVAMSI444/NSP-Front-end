import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// This service is used to provide services related to Ministry
// it calls methods for approval or rejection of application or institute 

@Injectable({
  providedIn: 'root'
})
export class MinistryService {
  url='http://localhost:44186/api/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) {}
    getStudents():Observable<any>{
        return this.httpclient.get<any>(this.url + 'ScholarshipApproval/ScholarshipForMinistry')
    }

    getInstitutes():Observable<any>{
      return this.httpclient.get<any>(this.url+'InstituteApproval/InstituteForMinistry')
    }

    verifyapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/ApproveByMinistry/'+id,body)
    }
  
    declineapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/RejectByMinistry/'+id,body)
    }

    getInstitute(id:number):Observable<any>{
      return this.httpclient.get<any>(this.url+'Institute/InstituteDetails/'+id)
    }

    verifyInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/ApproveRequestByMinistry/'+id,body)
    }
  
    declineInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/RejectRequestByMinistry/'+id,body)
    }
}

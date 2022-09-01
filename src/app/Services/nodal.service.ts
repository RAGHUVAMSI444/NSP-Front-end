import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminLogin } from '../iadmin-login';

// This service is used to provide services related to Nodal Officer
// it calls methods of related to application and institute approval
// or rejection in the backend

@Injectable({
  providedIn: 'root'
})
export class NodalService {
  url='http://localhost:44186/api/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) {}
    getStudents():Observable<any>{
        return this.httpclient.get<any>(this.url + 'ScholarshipApproval/ScholarshipForOfficer')
    }

    getInstitutes():Observable<any>{
      return this.httpclient.get<any>(this.url+'InstituteApproval/InstituteForOfficer')
    }

    verifyapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/ApproveByOfficer/'+id,body)
    }
  
    declineapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'ScholarshipApproval/RejectByOfficer/'+id,body)
    }

    getInstitute(id:number):Observable<any>{
      return this.httpclient.get<any>(this.url+'Institute/InstituteDetails/'+id)
    }

    verifyInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/ApproveRequestByOfficer/'+id,body)
    }
  
    declineInsapplication(id:number):Observable<any>{
      console.log("inside service"+id)
      const body = {appid:id}
      return this.httpclient.put<any>(this.url+'InstituteApproval/RejectRequestByOfficer/'+id,body)
    }
    checkNodal(login:IAdminLogin):Observable<any>{
      return this.httpclient.post<IAdminLogin>(this.url + 'Admin/AdminLogin' ,login)
    }
   
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInstitute } from '../iinstitute';
import { IInstituteStatus } from '../iinstitute-status';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-home',
  templateUrl: './institute-home.component.html',
  styleUrls: ['./institute-home.component.css']
})
///<summary>
//This component is for the institute home page . Important information about the institute and 
//all the scholarship applications for that institute.
export class InstituteHomeComponent implements OnInit {

  institutedata: IInstitute ={
    instituteId:0,
    instituteCategory:"",
    name:"",
    institutecode:0,
    disecode:0,
    location:"",
    instituteType:"",
    affiliatedState:"",
    affiliatedName:"",
    admissionStartYear:"",
    password:"",
    address:"",
    city:"",
    state:"",
    district:"",
    pincode:0,
    principalName:"",
    principalNumber:"",
  }
  statusdata:IInstituteStatus={
    instituteApprovalId:0,
    instituteId:0,
    approvedByNodalOfficer:0,
    approvedByMinistry:0,
  }

  instituteid: number = 0
  load:boolean=false
  constructor(private instituteservice: InstituteService, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id')
    
    this.instituteid = Number(tid);
   
    this.instituteservice.getInstitute(this.instituteid).subscribe((res) => {
      
      this.institutedata=res
      this.load=true
      console.log(this.institutedata)
    }, (err) => {
      console.log(err)
    })
    
    console.log(this.institutedata)
    this.instituteservice.getInstituteApproval(this.instituteid).subscribe((data:any)=>{
      console.log(data)
      this.statusdata=data} )
  }

}

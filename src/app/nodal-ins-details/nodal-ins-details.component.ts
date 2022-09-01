import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInstitute } from '../iinstitute';
import { NodalService } from '../Services/nodal.service';

@Component({
  selector: 'app-nodal-ins-details',
  templateUrl: './nodal-ins-details.component.html',
  styleUrls: ['./nodal-ins-details.component.css']
})
///<summary>
//This component is to show details of institute to nodal officer  
// Nodal officer can approve or reject the application.
export class NodalInsDetailsComponent implements OnInit {

  application: IInstitute={
    instituteId:0,
    instituteCategory:'',
    name:'',
    institutecode:0,
    disecode:0,
    location:'',
    instituteType:'',
    affiliatedState:'',
    affiliatedName:'',
    admissionStartYear:'',
    password:'',
    address:'',
    city:'',
    state:'', 
    district:'',
    pincode:0,
    principalName:'',
    principalNumber:'',
  }
  applicationId:number=0
  constructor(private nodalservice:NodalService,private router:Router,private activatedRoute: ActivatedRoute) { }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.verifyInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/NodalOfficer/'])
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.declineInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/NodalOfficer/'])
  }

  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get('id')
    this.applicationId = Number(tid);
    this.nodalservice.getInstitute(this.applicationId).subscribe((data: any) => {
      this.application = data
      console.log(this.application)
    })
  }


}

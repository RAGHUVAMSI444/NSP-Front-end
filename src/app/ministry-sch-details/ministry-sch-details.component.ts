import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IApplication } from '../iapplication';
import { MinistryService } from '../Services/ministry.service';

import { SchAppService } from '../Services/sch-app.service';

@Component({
  selector: 'app-ministry-sch-details',
  templateUrl: './ministry-sch-details.component.html',
  styleUrls: ['./ministry-sch-details.component.css']
})
///<summary>
//This component is to show details of student to ministry   
// Ministry can approve or reject the application.
export class MinistrySchDetailsComponent implements OnInit {

  application: IApplication={
    applicationId:0,
  studentId:0,
  instituteId:0,
  religion:'',
  community:'',
  fathername:'',
  mothername:'',
  annualIncome:0,
  instituteName:'',
  presentCourse:'',
  presentCourseYear:'',
  modeOfStudy:'',
  classStartDate:new Date(),
  universityBoardName:'',
  previousCourse:'',
  previousPassingYear:'',
  previousCoursePercentage:0,
  rollNumber10th:0,
  boardName10th:'',
  passingYear10th:'',
  percentage10th:0,
  rollNumber12th:0,
  boardName12th:'',
  passingYear12th:'',
  percentage12th:0,
  admissionFee:0,
  tuitionFee:0,
  otherFee:0,
  isDisabled:'',
  disabilityType:'',
  disabilityPercentage:0,
  maritalStatus:'',
  parentsProfession:'',
  state:'',
  district:'',
  address:'',
  pincode:0,
  scholarshipId:0,
  }
  applicationId: number = 0
  constructor(private schAppService:SchAppService,private router:Router,private ministryservice: MinistryService,private activatedRoute: ActivatedRoute) { }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.ministryservice.verifyapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/Ministry/'])
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.ministryservice.declineapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/Ministry/'])
  }

ngOnInit(): void {
  const tid = this.activatedRoute.snapshot.paramMap.get('id')
  this.applicationId = Number(tid);
  this.schAppService.getSchApplication(this.applicationId).subscribe((data: any) => {
    this.application = data
    console.log(this.application)
  })
}

}

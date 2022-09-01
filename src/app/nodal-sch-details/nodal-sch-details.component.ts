import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IApplication } from '../iapplication';
import { NodalService } from '../Services/nodal.service';
import { SchAppService } from '../Services/sch-app.service';

@Component({
  selector: 'app-nodal-sch-details',
  templateUrl: './nodal-sch-details.component.html',
  styleUrls: ['./nodal-sch-details.component.css']
})
///<summary>
//This component is to show details of student to nodal officer   
// nodal officer can approve or reject the application.
export class NodalSchDetailsComponent implements OnInit {

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
constructor(private schAppService:SchAppService,private nodalservice: NodalService,private router:Router,private activatedRoute: ActivatedRoute) { }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.verifyapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/NodalOfficer/'])
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.declineapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['/NodalOfficer/'])
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

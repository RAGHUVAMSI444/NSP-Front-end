import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchAppService } from '../Services/sch-app.service';

@Component({
  selector: 'app-scholarship-application',
  templateUrl: './scholarship-application.component.html',
  styleUrls: ['./scholarship-application.component.css']
})
///<summary>
//This component is for student to apply for a scholarship.The student call fill all the necessary details in the 
// form provided and using SchAppService the data will be passed to backend 
export class ScholarshipApplicationComponent implements OnInit {

  applicationform = {} as FormGroup
  formSubmitted=false
  studentid:number=0
 
  constructor(private formBuilder: FormBuilder,private schappservice:SchAppService, private router:Router,private activatedroute:ActivatedRoute) { }

  
  saveSchApp(){
    this.formSubmitted=true
    console.log(this.applicationform.value)
    
    this.schappservice.addSchApplication(this.applicationform.value).subscribe((d)=>{
      alert("Application has been submitted and sent for further verification!")
      console.log("service working")
      console.log(d)
      this.router.navigate(['/StudentHome/',this.studentid])
    })
  }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    this.studentid=Number(tid);
    this.createform()
  }
  createform(){
    this.applicationform=this.formBuilder.group({
      StudentId:this.studentid,
      InstituteId:18,
      Religion:['',[Validators.required]],
    Community:['',[Validators.required]],
    Fathername:['',[Validators.required]],
    Mothername:['',[Validators.required]],
    AnnualIncome:[0,[Validators.required]],
    InstituteName:['',[Validators.required]],
    PresentCourse:['',[Validators.required]],
    PresentCourseYear:['',[Validators.required]],
    ModeOfStudy:['',[Validators.required]],
    ClassStartDate:[new Date(),[Validators.required]],
    UniversityBoardName:['',Validators.required],
    PreviousCourse:['',[Validators.required]],
    PreviousPassingYear:['',[Validators.required]],
    PreviousCoursePercentage:[0,[Validators.required]],
    RollNumber10th:[0,[Validators.required]],
    BoardName10th:['',[Validators.required]],
    PassingYear10th:['',[Validators.required]],
    Percentage10th:[0,[Validators.required]],
    RollNumber12th:[0,[Validators.required]],
    BoardName12th:['',[Validators.required]],
    PassingYear12th:['',[Validators.required]],
    Percentage12th:[0,[Validators.required]],
    AdmissionFee:[0,[Validators.required]],
    TuitionFee:[0,[Validators.required]],
    OtherFee:[0,[Validators.required]],
    IsDisabled:['',[Validators.required]],
    DisabilityType:['',[Validators.required]],
    DisabilityPercentage:[0,[Validators.required]],
    MaritalStatus:['',[Validators.required]],
    ParentsProfession:['',[Validators.required]],
    State:['',[Validators.required]],
    District:['',[Validators.required]],
    Address:['',[Validators.required]],
    Pincode:[0,[Validators.required]],
    ScholarshipId:[0,[Validators.required]]
    })
  }
}

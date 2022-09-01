import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { CustomValidators } from '../Providers/CustomValidator';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  studentregistrationform :FormGroup
  formSubmitted = false
  studentId: number = 0
  pswd:string
  confirmpswd:string
  
  constructor(private formBuilder: FormBuilder, private studentservice: StudentService, private router: Router) { }

  

  saveStudent(){
    this.formSubmitted=true;
    console.log(this.formSubmitted)
    console.log(this.studentregistrationform.invalid)
    if(this.studentregistrationform.invalid){
      alert("enter correct details")
    }
    else{
    this.studentservice.addStudent(this.studentregistrationform.value).subscribe((d)=>{
      console.log("service working")
      console.log(d)
      alert("Student Registration is Successful! Continue to Login Page")
      this.router.navigate(['/Home'])
    })
  }
    
  }
  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.studentregistrationform = this.formBuilder.group({
      name: ['',[Validators.required]],
      dob: [new Date(),[Validators.required]],
      gender: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.email,Validators.required]],
      instituteCode: [0,[Validators.required]],
      aadhaar: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(12),Validators.maxLength(12)]], 
      bankName: ['',[Validators.required]], 
      accountNo: ['',[Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(9),Validators.maxLength(18)]], 
      bankIFSC: ['',[Validators.required]], 
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    })
  }
  get f(): any {
    return this.studentregistrationform;
  }
}


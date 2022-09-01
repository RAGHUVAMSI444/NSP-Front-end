import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
///<summary>
// This component is for institute registration page . institute can fill the details in the form provided 
// and on submitting the form we will call the institute service through saveInstitute function and pass the data to
// backend  
export class InstituteRegistrationComponent implements OnInit {
  instituteregistrationform : FormGroup
  formSubmitted=false
  

  constructor(private formBuilder: FormBuilder, private instituteservice: InstituteService, private router: Router) { }

 

  saveInstitute(){
    this.formSubmitted=true
    console.log(this.instituteregistrationform.value)
    if(this.instituteregistrationform.invalid){
      alert("Enter correct details")
    }
    else{
    this.instituteservice.addInstitute(this.instituteregistrationform.value).subscribe((d: any)=>{
      alert("Registration Successful! Continue to Login Page")
      console.log("service working")
      console.log(d)
      this.router.navigate(['/Home'])
    })
  }
}

  ngOnInit(): void {
    this.createform()
  }
  createform() {
    this.instituteregistrationform = this.formBuilder.group({
      instituteCategory: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      name: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      institutecode: [0,[Validators.required]],
      disecode: [0,[Validators.required]],
      location: ['',[Validators.required]],
      instituteType: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      affiliatedState: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      affiliatedName: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      admissionStartYear: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      state: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      district: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      pincode: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)]],
      principalName: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      principalNumber: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]]}
    )}
    get f(): any {
      return this.instituteregistrationform;
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdminLogin } from '../iadmin-login';
import { NodalService } from '../Services/nodal.service';

@Component({
  selector: 'app-nodal-login',
  templateUrl: './nodal-login.component.html',
  styleUrls: ['./nodal-login.component.css']
})
///<summary>
//This component is for nodal officer login . Only if the nodal officer enters the correct details (id:nodal ,
// password:nodal) , the login will work
export class NodalLoginComponent implements OnInit {
  nodalloginForm={} as FormGroup
  formSubmitted=false
  logindata:IAdminLogin={
      Name:'',
      Password:''
    }
  constructor(private formBuilder: FormBuilder,private router:Router,private nodalservice:NodalService) { }

  ngOnInit(): void {
    this.createloginForm();
  }

  createloginForm(){
    this.nodalloginForm=this.formBuilder.group({
      ID:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  onFormSubmit(){

    this.logindata.Name=this.nodalloginForm.value.ID
    this.logindata.Password=this.nodalloginForm.value.Password
    this.nodalservice.checkNodal(this.logindata).subscribe((d)=>{
    if(d==true){this.formSubmitted=true;this.router.navigate(["/NodalOfficer"])
  }
  else{
    alert("Id or Password is incorrect!")
  }
})

    
  }



}

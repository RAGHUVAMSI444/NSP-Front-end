import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdminLogin } from '../iadmin-login';
import { NodalService } from '../Services/nodal.service';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
///<summary>
//This component is for ministry login . Only if the ministry enters the correct details (id:ministry , password:ministry)
// , the login will work.
export class MinistryLoginComponent implements OnInit {
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
    if(d==true){this.formSubmitted=true;this.router.navigate(["/Ministry"])
  }
  else{
    alert("Id or Password is incorrect!")
  }
})

}
}

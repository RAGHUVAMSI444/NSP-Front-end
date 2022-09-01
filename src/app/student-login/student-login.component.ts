import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudentLogin } from '../istudent-login';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginid:number=0

  logindata:IStudentLogin={
    Aadhaar:'',
    Password:''
  }
  constructor(private studentservice:StudentService, private router:Router) { }

  saveLogin(login:IStudentLogin){
    this.logindata=login
    this.studentservice.checkStudent(this.logindata).subscribe((d)=>
    {
      if(d==false){
        alert("Username or password incorrect!")
      }
      else{
      this.loginid=d
      alert("Login Successful! Your ID is " + this.loginid)
      this.router.navigate(['/StudentHome/',this.loginid])
      }
    })
  }

  ngOnInit(): void {
  }
}

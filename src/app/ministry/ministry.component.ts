import { Component, OnInit } from '@angular/core';
import { MinistryService } from '../Services/ministry.service';

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
///<summary>
//This component is for ministry home component.  
// Ministry can see all the applications of student and institutes that are approved by nodal officer
export class MinistryComponent implements OnInit {

  studentdata:any
  institutedata:any
  constructor(private ministryservice: MinistryService) { }

  ngOnInit(): void {
    this.ministryservice.getStudents().subscribe((data:any)=>{
      this.studentdata=data
  })
  console.log(this.studentdata)

  this.ministryservice.getInstitutes().subscribe((data:any)=>{
    this.institutedata=data
})
console.log(this.institutedata)
  }

}

import { Component, OnInit } from '@angular/core';
import { NodalService } from '../Services/nodal.service';

@Component({
  selector: 'app-nodal-officer',
  templateUrl: './nodal-officer.component.html',
  styleUrls: ['./nodal-officer.component.css']
})
///<summary>
//This component is for nodal officer home page where all the student and institute applications are shown
export class NodalOfficerComponent implements OnInit {

  studentdata:any[]=[]
  institutedata:any[]=[]


  constructor(private nodalservice: NodalService) { }

  ngOnInit(): void {
    this.nodalservice.getStudents().subscribe((data:any)=>{
        this.studentdata=data
    })
    console.log(this.studentdata)

    this.nodalservice.getInstitutes().subscribe((data:any)=>{
      this.institutedata=data
  })
  console.log(this.institutedata)
  } 
  clickme(){
    
  }

}

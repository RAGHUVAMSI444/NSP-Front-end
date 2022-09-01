import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ScholarshipApplicationComponent } from './scholarship-application/scholarship-application.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { ApplicationsForInstituteComponent } from './applications-for-institute/applications-for-institute.component';
import { InstituteStudentApplicationsComponent } from './institute-student-applications/institute-student-applications.component';

import { HomeComponent } from './home/home.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { NodalOfficerComponent } from './nodal-officer/nodal-officer.component';
import { NodalSchDetailsComponent } from './nodal-sch-details/nodal-sch-details.component';
import { NodalInsDetailsComponent } from './nodal-ins-details/nodal-ins-details.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { MinistryComponent } from './ministry/ministry.component';

import { MinistryInsDetailsComponent } from './ministry-ins-details/ministry-ins-details.component';
import { MinistrySchDetailsComponent } from './ministry-sch-details/ministry-sch-details.component';
import { MeritBasedComponent } from './merit-based/merit-based.component';
import { PostMatricComponent } from './post-matric/post-matric.component';
import { PragatiComponent } from './pragati/pragati.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentLoginComponent,
    InstituteLoginComponent,
    InstituteRegistrationComponent,
    StudentHomeComponent,
    ScholarshipApplicationComponent,
    InstituteHomeComponent,
    ApplicationsForInstituteComponent,
    InstituteStudentApplicationsComponent,
    HomeComponent,
    NodalLoginComponent,
    NodalOfficerComponent,
    NodalSchDetailsComponent,
    NodalInsDetailsComponent,
    MinistryLoginComponent,
    MinistryComponent,
 
    MinistryInsDetailsComponent,
      MinistrySchDetailsComponent,
      MeritBasedComponent,
      PostMatricComponent,
      PragatiComponent,
      AboutUsComponent,
      ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

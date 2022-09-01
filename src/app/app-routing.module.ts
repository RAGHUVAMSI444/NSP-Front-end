import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationsForInstituteComponent } from './applications-for-institute/applications-for-institute.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { InstituteStudentApplicationsComponent } from './institute-student-applications/institute-student-applications.component';
import { MeritBasedComponent } from './merit-based/merit-based.component';
import { MinistryInsDetailsComponent } from './ministry-ins-details/ministry-ins-details.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { MinistrySchDetailsComponent } from './ministry-sch-details/ministry-sch-details.component';
import { MinistryComponent } from './ministry/ministry.component';
import { NodalInsDetailsComponent } from './nodal-ins-details/nodal-ins-details.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { NodalOfficerComponent } from './nodal-officer/nodal-officer.component';
import { NodalSchDetailsComponent } from './nodal-sch-details/nodal-sch-details.component';
import { PostMatricComponent } from './post-matric/post-matric.component';
import { PragatiComponent } from './pragati/pragati.component';

import { ScholarshipApplicationComponent } from './scholarship-application/scholarship-application.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  {path:'StudentHome/:id',component:StudentHomeComponent},
  {path:'StudentLogin',component:StudentLoginComponent},
  {path:'StudentRegistration',component:StudentRegistrationComponent},
  {path:'ScholarshipApplication/:id',component:ScholarshipApplicationComponent},
  {path:'InstituteHome/:id',component:InstituteHomeComponent},
  {path:'InstituteLogin',component:InstituteLoginComponent},
  {path:'InstituteRegistration',component:InstituteRegistrationComponent},
  {path:'ApplicationForInstitute/:id', component:ApplicationsForInstituteComponent},
  {path:'InstituteStudentApplication/:id',component:InstituteStudentApplicationsComponent},
  {path:'Home',component:HomeComponent},
  {path:'NodalLogin',component:NodalLoginComponent},
  {path:'NodalOfficer',component:NodalOfficerComponent},
  {path:'NodalSchDetails/:id',component:NodalSchDetailsComponent},
  {path:'NodalInsDetails/:id',component:NodalInsDetailsComponent},
  {path:'MinistryLogin',component:MinistryLoginComponent},
  {path:'Ministry',component:MinistryComponent},
  {path:'MinistrySchDetails/:id',component:MinistrySchDetailsComponent},
  {path:'MinistryInsDetails/:id',component:MinistryInsDetailsComponent},
  {path:'PostMatricScholarship',component:PostMatricComponent},
  {path:'ScholarshipForGirls',component:PragatiComponent},
  {path:'MeritBasedScholarship',component:MeritBasedComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

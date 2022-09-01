import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteStudentApplicationsComponent } from './institute-student-applications.component';

describe('InstituteStudentApplicationsComponent', () => {
  let component: InstituteStudentApplicationsComponent;
  let fixture: ComponentFixture<InstituteStudentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteStudentApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteStudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

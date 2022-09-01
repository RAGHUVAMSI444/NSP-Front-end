import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsForInstituteComponent } from './applications-for-institute.component';

describe('ApplicationsForInstituteComponent', () => {
  let component: ApplicationsForInstituteComponent;
  let fixture: ComponentFixture<ApplicationsForInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsForInstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsForInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

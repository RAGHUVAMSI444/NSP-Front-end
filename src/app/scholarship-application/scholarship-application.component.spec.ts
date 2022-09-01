import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipApplicationComponent } from './scholarship-application.component';

describe('ScholarshipApplicationComponent', () => {
  let component: ScholarshipApplicationComponent;
  let fixture: ComponentFixture<ScholarshipApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

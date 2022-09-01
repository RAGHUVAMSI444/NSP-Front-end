import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryInsDetailsComponent } from './ministry-ins-details.component';

describe('MinistryInsDetailsComponent', () => {
  let component: MinistryInsDetailsComponent;
  let fixture: ComponentFixture<MinistryInsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryInsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistryInsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

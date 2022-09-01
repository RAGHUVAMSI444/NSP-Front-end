import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySchDetailsComponent } from './ministry-sch-details.component';

describe('MinistrySchDetailsComponent', () => {
  let component: MinistrySchDetailsComponent;
  let fixture: ComponentFixture<MinistrySchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrySchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistrySchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritBasedComponent } from './merit-based.component';

describe('MeritBasedComponent', () => {
  let component: MeritBasedComponent;
  let fixture: ComponentFixture<MeritBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeritBasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeritBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

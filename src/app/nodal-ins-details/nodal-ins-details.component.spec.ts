import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalInsDetailsComponent } from './nodal-ins-details.component';

describe('NodalInsDetailsComponent', () => {
  let component: NodalInsDetailsComponent;
  let fixture: ComponentFixture<NodalInsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalInsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodalInsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

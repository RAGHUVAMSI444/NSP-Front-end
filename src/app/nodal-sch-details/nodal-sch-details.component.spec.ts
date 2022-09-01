import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalSchDetailsComponent } from './nodal-sch-details.component';

describe('NodalSchDetailsComponent', () => {
  let component: NodalSchDetailsComponent;
  let fixture: ComponentFixture<NodalSchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalSchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodalSchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PragatiComponent } from './pragati.component';

describe('PragatiComponent', () => {
  let component: PragatiComponent;
  let fixture: ComponentFixture<PragatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PragatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PragatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

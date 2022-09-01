import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMatricComponent } from './post-matric.component';

describe('PostMatricComponent', () => {
  let component: PostMatricComponent;
  let fixture: ComponentFixture<PostMatricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMatricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

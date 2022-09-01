import { TestBed } from '@angular/core/testing';

import { ScholarshipApplicationService } from './scholarship-application.service';

describe('ScholarshipApplicationService', () => {
  let service: ScholarshipApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

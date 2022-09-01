import { TestBed } from '@angular/core/testing';

import { SchAppService } from './sch-app.service';

describe('SchAppService', () => {
  let service: SchAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NodalService } from './nodal.service';

describe('NodalService', () => {
  let service: NodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

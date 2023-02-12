import { TestBed } from '@angular/core/testing';

import { HttpJobsService } from './http-jobs.service';

describe('HttpJobsService', () => {
  let service: HttpJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

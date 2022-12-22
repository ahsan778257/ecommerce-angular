import { TestBed } from '@angular/core/testing';

import { RailwayserviceService } from './railwayservice.service';

describe('RailwayserviceService', () => {
  let service: RailwayserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailwayserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

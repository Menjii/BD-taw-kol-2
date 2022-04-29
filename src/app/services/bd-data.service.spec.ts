import { TestBed } from '@angular/core/testing';

import { BDDataService } from './bd-data.service';

describe('BDDataService', () => {
  let service: BDDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HospitalsService } from './hospitals.service';

describe('HospitalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitalsService = TestBed.get(HospitalsService);
    expect(service).toBeTruthy();
  });
});

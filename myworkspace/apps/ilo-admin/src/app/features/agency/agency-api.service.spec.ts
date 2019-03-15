import { TestBed } from '@angular/core/testing';

import { AgencyApiService } from './agency-api.service';

describe('AgencyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgencyApiService = TestBed.get(AgencyApiService);
    expect(service).toBeTruthy();
  });
});

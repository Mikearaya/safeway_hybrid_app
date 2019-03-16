import { TestBed } from '@angular/core/testing';

import { SchoolApiService } from './school-api.service';

describe('SchoolApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolApiService = TestBed.get(SchoolApiService);
    expect(service).toBeTruthy();
  });
});

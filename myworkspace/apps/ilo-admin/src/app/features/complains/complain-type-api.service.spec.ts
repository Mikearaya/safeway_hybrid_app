import { TestBed } from '@angular/core/testing';

import { ComplainTypeApiService } from './complain-type-api.service';

describe('ComplainTypeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplainTypeApiService = TestBed.get(ComplainTypeApiService);
    expect(service).toBeTruthy();
  });
});

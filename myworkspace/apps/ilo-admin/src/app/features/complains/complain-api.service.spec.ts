import { TestBed } from '@angular/core/testing';

import { ComplainApiService } from './complain-api.service';

describe('ComplainApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplainApiService = TestBed.get(ComplainApiService);
    expect(service).toBeTruthy();
  });
});

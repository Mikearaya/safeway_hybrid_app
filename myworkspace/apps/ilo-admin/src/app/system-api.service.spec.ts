import { TestBed } from '@angular/core/testing';

import { SystemApiService } from './system-api.service';

describe('SystemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemApiService = TestBed.get(SystemApiService);
    expect(service).toBeTruthy();
  });
});

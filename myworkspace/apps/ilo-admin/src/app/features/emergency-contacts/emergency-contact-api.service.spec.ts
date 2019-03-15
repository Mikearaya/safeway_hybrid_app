import { TestBed } from '@angular/core/testing';

import { EmergencyContactApiService } from './emergency-contact-api.service';

describe('EmergencyContactApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmergencyContactApiService = TestBed.get(EmergencyContactApiService);
    expect(service).toBeTruthy();
  });
});

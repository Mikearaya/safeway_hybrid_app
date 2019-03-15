import { TestBed } from '@angular/core/testing';

import { ForumApiService } from './forum-api.service';

describe('ForumApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumApiService = TestBed.get(ForumApiService);
    expect(service).toBeTruthy();
  });
});

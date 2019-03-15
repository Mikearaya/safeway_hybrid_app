import { TestBed } from '@angular/core/testing';

import { ArticlesApiService } from './articles-api.service';

describe('ArticlesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesApiService = TestBed.get(ArticlesApiService);
    expect(service).toBeTruthy();
  });
});

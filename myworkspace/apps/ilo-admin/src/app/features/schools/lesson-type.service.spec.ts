import { TestBed } from '@angular/core/testing';

import { LessonTypeService } from './lesson-type.service';

describe('LessonTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonTypeService = TestBed.get(LessonTypeService);
    expect(service).toBeTruthy();
  });
});

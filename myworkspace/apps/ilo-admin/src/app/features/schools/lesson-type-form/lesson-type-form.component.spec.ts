import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTypeFormComponent } from './lesson-type-form.component';

describe('LessonTypeFormComponent', () => {
  let component: LessonTypeFormComponent;
  let fixture: ComponentFixture<LessonTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LessonTypeFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

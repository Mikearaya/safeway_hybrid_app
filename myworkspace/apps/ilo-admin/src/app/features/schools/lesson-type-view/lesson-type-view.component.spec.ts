import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTypeViewComponent } from './lesson-type-view.component';

describe('LessonTypeViewComponent', () => {
  let component: LessonTypeViewComponent;
  let fixture: ComponentFixture<LessonTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

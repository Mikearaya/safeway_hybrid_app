import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCreationFormComponent } from './forum-creation-form.component';

describe('ForumCreationFormComponent', () => {
  let component: ForumCreationFormComponent;
  let fixture: ComponentFixture<ForumCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForumCreationFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

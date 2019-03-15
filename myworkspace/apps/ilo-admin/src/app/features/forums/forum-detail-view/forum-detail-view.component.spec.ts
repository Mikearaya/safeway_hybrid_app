import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDetailViewComponent } from './forum-detail-view.component';

describe('ForumDetailViewComponent', () => {
  let component: ForumDetailViewComponent;
  let fixture: ComponentFixture<ForumDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForumDetailViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

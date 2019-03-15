import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsListViewComponent } from './forums-list-view.component';

describe('ForumsListViewComponent', () => {
  let component: ForumsListViewComponent;
  let fixture: ComponentFixture<ForumsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForumsListViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

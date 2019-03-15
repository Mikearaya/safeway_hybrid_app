import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainDetailViewComponent } from './complain-detail-view.component';

describe('ComplainDetailViewComponent', () => {
  let component: ComplainDetailViewComponent;
  let fixture: ComponentFixture<ComplainDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainDetailViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

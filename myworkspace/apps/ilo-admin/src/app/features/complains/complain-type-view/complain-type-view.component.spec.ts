import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainTypeViewComponent } from './complain-type-view.component';

describe('ComplainTypeViewComponent', () => {
  let component: ComplainTypeViewComponent;
  let fixture: ComponentFixture<ComplainTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainTypeViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

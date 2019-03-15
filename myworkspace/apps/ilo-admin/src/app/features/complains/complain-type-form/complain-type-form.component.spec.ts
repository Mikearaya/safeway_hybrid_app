import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainTypeFormComponent } from './complain-type-form.component';

describe('ComplainTypeFormComponent', () => {
  let component: ComplainTypeFormComponent;
  let fixture: ComponentFixture<ComplainTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

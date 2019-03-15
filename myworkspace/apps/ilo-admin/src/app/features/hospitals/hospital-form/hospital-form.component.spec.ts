import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFormComponent } from './hospital-form.component';

describe('HospitalFormComponent', () => {
  let component: HospitalFormComponent;
  let fixture: ComponentFixture<HospitalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

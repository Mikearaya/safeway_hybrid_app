import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactViewComponent } from './emergency-contact-view.component';

describe('EmergencyContactViewComponent', () => {
  let component: EmergencyContactViewComponent;
  let fixture: ComponentFixture<EmergencyContactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyContactViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

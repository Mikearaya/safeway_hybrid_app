import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactFormComponent } from './emergency-contact-form.component';

describe('EmergencyContactFormComponent', () => {
  let component: EmergencyContactFormComponent;
  let fixture: ComponentFixture<EmergencyContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyContactFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

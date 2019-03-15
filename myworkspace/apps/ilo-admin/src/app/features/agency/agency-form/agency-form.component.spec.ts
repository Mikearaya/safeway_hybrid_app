import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFormComponent } from './agency-form.component';

describe('AgencyFormComponent', () => {
  let component: AgencyFormComponent;
  let fixture: ComponentFixture<AgencyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

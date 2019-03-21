import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeFormComponent } from './password-change-form.component';

describe('PasswordChangeFormComponent', () => {
  let component: PasswordChangeFormComponent;
  let fixture: ComponentFixture<PasswordChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

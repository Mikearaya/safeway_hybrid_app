import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsViewComponent } from './hospitals-view.component';

describe('HospitalsViewComponent', () => {
  let component: HospitalsViewComponent;
  let fixture: ComponentFixture<HospitalsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsViewComponent } from './complains-view.component';

describe('ComplainsViewComponent', () => {
  let component: ComplainsViewComponent;
  let fixture: ComponentFixture<ComplainsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

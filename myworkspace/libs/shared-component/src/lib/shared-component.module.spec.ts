import { async, TestBed } from '@angular/core/testing';
import { SharedComponentModule } from './shared-component.module';

describe('SharedComponentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedComponentModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { AuthorizationModule } from './authorization.module';

describe('AuthorizationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthorizationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthorizationModule).toBeDefined();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFormComponent } from './articles-form.component';

describe('ArticlesFormComponent', () => {
  let component: ArticlesFormComponent;
  let fixture: ComponentFixture<ArticlesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

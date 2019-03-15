import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCatagoryFormComponent } from './article-catagory-form.component';

describe('ArticleCatagoryFormComponent', () => {
  let component: ArticleCatagoryFormComponent;
  let fixture: ComponentFixture<ArticleCatagoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCatagoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCatagoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

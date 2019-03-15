import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCatagoryViewComponent } from './article-catagory-view.component';

describe('ArticleCatagoryViewComponent', () => {
  let component: ArticleCatagoryViewComponent;
  let fixture: ComponentFixture<ArticleCatagoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCatagoryViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCatagoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

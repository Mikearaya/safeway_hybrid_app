import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesApiService } from '../articles-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  ArticleViewModel,
  ArticleCatagoryViewModel,
  ArticleModel
} from '../articles-data.model';

@Component({
  selector: 'bionic-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesFormComponent implements OnInit {
  private articleId: number;
  public isUpdate: Boolean;
  private articleForm: FormGroup;
  private articleLocaleForm: FormGroup;
  public articleCatagories: ArticleCatagoryViewModel[] = [];

  constructor(
    private articleApi: ArticlesApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
    this.createArticleLocaleForm();
  }

  ngOnInit() {
    this.articleId = +this.activatedRoute.snapshot.paramMap.get('articleId');
    this.articleApi
      .getArticleCatagories()
      .subscribe(
        (data: ArticleCatagoryViewModel[]) => (this.articleCatagories = data)
      );
    if (this.articleId) {
      this.isUpdate = true;
      this.articleApi
        .getArticleById(this.articleId)
        .subscribe((data: ArticleViewModel) => this.initializeForm(data));
    }
  }

  createForm(): void {
    this.articleForm = this.formBuilder.group({
      catagory: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  initializeForm(article: ArticleViewModel): void {
    this.articleForm = this.formBuilder.group({
      id: [article.id, Validators.required],
      catagory: [article.catagoryId, Validators.required],
      title: [article.title, Validators.required],
      content: [article.content, Validators.required]
    });
  }

  createArticleLocaleForm(): void {
    this.articleLocaleForm = this.formBuilder.group({
      articleLocales: this.formBuilder.array([
        this.formBuilder.group({
          catagory: ['', Validators.required],
          content: ['', Validators.required],
          locale: ['', Validators.required],
          title: ['', Validators.required]
        })
      ])
    });
  }

  get articleTitle(): FormControl {
    return this.articleForm.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.articleForm.get('content') as FormControl;
  }
  get catagory(): FormControl {
    return this.articleForm.get('catagory') as FormControl;
  }

  get articleLocales(): FormArray {
    return this.articleLocaleForm.get('articleLocales') as FormArray;
  }

  onSubmit(): void {}

  prepareFormData(): ArticleModel | null {
    if (this.articleForm.valid) {
      if (this.isUpdate && this.articleId) {
        return {
          content: this.content.value,
          type: this.catagory.value,
          title: this.articleTitle.value,
          id: this.articleId
        };
      } else {
        return {
          title: this.articleTitle.value,
          content: this.content.value,
          type: this.catagory.value
        };
      }
    }
  }
}

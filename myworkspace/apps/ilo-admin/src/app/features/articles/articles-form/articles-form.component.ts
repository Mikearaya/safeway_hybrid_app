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
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesFormComponent implements OnInit {
  public fields: Object = { text: 'name', value: 'ID' };
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
  private articleId: number;
  public isUpdate: Boolean;
  public articleForm: FormGroup;
  public articleLocaleForm: FormGroup;
  public articleCatagories: any[] = [];

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
      catagory: [article.CATAGORY_ID, Validators.required],
      title: [article.header, Validators.required],
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

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (formData) {
      if (!this.isUpdate) {
        this.articleApi.createArticle(formData).subscribe(
          (data: any) => {
            this.articleApi = data;
            this.isUpdate = true;
            alert('Article created successfully')
          },
          (error: HttpErrorResponse) => alert(error.message)
        );
      } else {
        this.articleApi
          .updateArticle(formData)
          .subscribe(
            () => alert('article updated successfully'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      }
    }
  }

  prepareFormData(): ArticleModel | null {
    if (this.articleForm.valid) {
      if (this.isUpdate && this.articleId) {
        return {
          content: this.content.value,
          CATAGORY_ID: this.catagory.value,
          header: this.articleTitle.value,
          ID: this.articleId
        };
      } else {
        return {
          header: this.articleTitle.value,
          content: this.content.value,
          CATAGORY_ID: this.catagory.value
        };
      }
    }
  }

  addLocale(): void {
    this.articleLocales.controls.push(
      this.formBuilder.group({
        catagory: ['', Validators.required],
        title: ['', Validators.required],
        content: ['', Validators.required]
      })
    );
  }

  deleteLocale(index: number): void {
    this.articleLocales.removeAt(index);
  }
}

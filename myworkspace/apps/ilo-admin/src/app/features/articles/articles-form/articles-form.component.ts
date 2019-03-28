import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
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
  ArticleCatagoryViewModel,
  Article,
  ArticleLocaleModel
} from '../articles-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService, Guid } from '../../../system-api.service';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { ConditionalExpr, IfStmt } from '@angular/compiler';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'bionic-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' },
    { text: 'File Attachments' }
  ];

  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public preLoadFiles: Object[] = [
    {
      name: null,
      size: null,
      type: null
    }
  ];
  private articleId: number;
  public isUpdate: Boolean;
  public articleForm: FormGroup;
  public articleCatagories: any[] = [];
  public languages: any;
  public deletedIds: number[] = [];
  path: { saveUrl: string; removeUrl: string };
  formId: any;

  constructor(
    private articleApi: ArticlesApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.formId = Guid.newGuid();
    this.path = {
      saveUrl: `http://localhost/ilo_app/backend/index.php/upload/media/english/${
        this.formId
      }`,
      removeUrl:
        'http://localhost/ilo_app/backend/index.php/upload/media_delete/article'
    };
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
        .subscribe((data: Article) => this.initializeForm(data));
    }

    this.systemConf
      .getLanguagesList()
      .subscribe(data => (this.languages = data));
  }

  createForm(): void {
    this.articleForm = this.formBuilder.group({
      catagory: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      articleLocales: this.formBuilder.array([])
    });
  }

  generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      content: ['', Validators.required],
      locale: ['', Validators.required],
      title: ['', Validators.required]
    });
  }
  initiLocaleForm(locale: ArticleLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [locale.ID, Validators.required],
      content: [locale.content, Validators.required],
      locale: [locale.locale, Validators.required],
      title: [locale.header, Validators.required]
    });
  }

  actionComplete(event: any) {
    this.submitForm();
  }
  initializeForm(article: Article): void {
    this.articleForm = this.formBuilder.group({
      id: [article.article.ID, Validators.required],
      catagory: [article.article.CATAGORY_ID, Validators.required],
      title: [article.article.header, Validators.required],
      content: [article.article.content, Validators.required],
      articleLocales: this.formBuilder.array([])
    });

    article.article_locale.forEach(element => {
      this.articleLocales.controls.push(this.initiLocaleForm(element));
    });

    this.defaultUpload.clearAll();
    this.preLoadFiles = [];
    if (article.image.length) {
      article.image.forEach(element => {
        this.preLoadFiles.push(element);
      });
    }

    if (article.audios.length) {
      article.audios.forEach(element => {
        this.preLoadFiles.push(element);
      });
    }

    if (article.videos.length) {
      article.videos.forEach(element => {
        this.preLoadFiles.push(element);
      });
    }
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
    return this.articleForm.get('articleLocales') as FormArray;
  }

  onSubmit(): void {
    this.defaultUpload.upload(this.defaultUpload.getFilesData());
  }

  submitForm(): void {
    const formData = this.prepareFormData();

    if (formData) {
      if (!this.isUpdate) {
        this.articleApi.createArticle(formData).subscribe(
          (data: any) => {
            this.articleApi = data;
            this.isUpdate = true;
            alert('Article created successfully');
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
  prepareFormData(): Article | null {
    const article = new Article();

    if (this.articleForm.valid) {
      if (this.isUpdate && this.articleId) {
        article.article = {
          content: this.content.value,
          CATAGORY_ID: this.catagory.value,
          header: this.articleTitle.value,
          ID: this.articleId
        };
      } else {
        article.article = {
          header: this.articleTitle.value,
          content: this.content.value,
          CATAGORY_ID: this.catagory.value
        };
      }

      this.articleLocales.controls.forEach(element =>
        article.article_locale.push({
          ID: element.value.id,
          content: element.value.content,
          header: element.value.title,
          locale: element.value.locale
        })
      );
      this.deletedIds.forEach(element => {
        article.deleted_ids.article_locale.push(element);
      });

      article.token = this.formId;
      return article;
    } else {
      return null;
    }
  }

  addLocale(): void {
    this.articleLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    const deletedControlId = this.articleLocales.controls[index].get('id');

    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.articleLocales.removeAt(index);
      }
    } else {
      this.articleLocales.removeAt(index);
    }
  }
}

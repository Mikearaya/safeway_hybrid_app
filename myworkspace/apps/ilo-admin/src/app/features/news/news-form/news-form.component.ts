import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService, Guid } from '../../../system-api.service';
import { News, NewsLocaleModel } from '../news-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'bionic-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public newsForm: FormGroup;
  private newsId: number;
  public languages: any;
  public isUpdate: Boolean;
  public deletedIds: number[] = [];
  formId: any;
  path: { saveUrl: string; removeUrl: string };
  preLoadFiles: string[] = ull;

  constructor(
    private newsApi: NewsApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.formId = Guid.newGuid();
    this.path = {
      saveUrl: ``,
      removeUrl: ``
    };
  }

  ngOnInit() {
    this.newsId = +this.activatedRoute.snapshot.paramMap.get('newsId');

    if (this.newsId) {
      this.isUpdate = true;
      this.newsApi
        .getNewsById(this.newsId)
        .subscribe((data: News) => this.initializeForm(data));
    }
    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));
  }

  private createForm(): void {
    this.newsForm = this.formBuilder.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      audio: [''],
      image: [''],
      video: [''],
      newsLocales: this.formBuilder.array([])
    });
  }

  get header(): FormControl {
    return this.newsForm.get('header') as FormControl;
  }

  get newsContent(): FormControl {
    return this.newsForm.get('content') as FormControl;
  }

  get audio(): FormControl {
    return this.newsForm.get('audio') as FormControl;
  }

  get video(): FormControl {
    return this.newsForm.get('video') as FormControl;
  }

  get image(): FormControl {
    return this.newsForm.get('image') as FormControl;
  }

  get newsLocales(): FormArray {
    return this.newsForm.get('newsLocales') as FormArray;
  }

  addLocale(): void {
    this.newsLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    const deletedControlId = this.newsLocales.controls[index].get('id');
    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.newsLocales.removeAt(index);
      }
    } else {
      this.newsLocales.removeAt(index);
    }
  }

  private initializeForm(news: News): void {
    this.newsForm = this.formBuilder.group({
      header: [news.article.header, Validators.required],
      content: [news.article.content, Validators.required],
      audio: [news.article.audio],
      image: [news.article.image],
      video: [news.article.video],
      newsLocales: this.formBuilder.array([])
    });

    if (news.image) {
      this.preLoadFiles = news.image;
    }

    news.article_locale.map(element =>
      this.newsLocales.push(this.initializeLocaleForm(element))
    );
  }

  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      locale: ['', Validators.required]
    });
  }

  private initializeLocaleForm(locale: NewsLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [locale.ID, Validators.required],
      header: [locale.header, Validators.required],
      content: [locale.content, Validators.required],
      locale: [locale.locale, Validators.required]
    });
  }

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (formData) {
      if (this.isUpdate) {
        this.newsApi
          .updateNews(formData)
          .subscribe(
            () => alert('News updated successfully'),
            (error: HttpErrorResponse) =>
              alert('Failed while attempting to update news try again')
          );
      } else {
        this.newsApi.createNews(formData).subscribe(
          (data: any) => {
            this.defaultUpload.asyncSettings = {
              saveUrl: `${
                environment.apiUrl
              }/upload/media/english/${data}/article`,
              removeUrl: `${
                environment.apiUrl
              }/upload/media_delete/article/${data}`
            };

            this.defaultUpload.upload(this.defaultUpload.getFilesData());
            this.isUpdate = true;
            this.newsId = data;
            alert('New created successfully');
          },
          (error: HttpErrorResponse) => {
            alert('Failed while creating new, try again');
          }
        );
      }
    }
  }

  private prepareFormData(): News | null {
    const news = new News();
    if (this.newsForm.valid) {
      if (this.isUpdate && this.newsId) {
        news.article = {
          ID: this.newsId,
          header: this.header.value,
          content: this.newsContent.value,
          audio: this.audio.value,
          video: this.video.value,
          image: this.image.value
        };
      } else {
        news.article = {
          header: this.header.value,
          content: this.newsContent.value,
          audio: this.audio.value,
          video: this.video.value,
          image: this.image.value
        };
      }

      this.newsLocales.controls.forEach(element => {
        news.article_locale.push({
          ID: element.value.id,
          content: element.value.content,
          header: element.value.header,
          locale: element.value.locale
        });
      });

      this.deletedIds.forEach(element => {
        news.deleted_ids.article_locale.push(element);
      });

      news.token = this.formId;

      return news;
    } else {
      return null;
    }
  }
}

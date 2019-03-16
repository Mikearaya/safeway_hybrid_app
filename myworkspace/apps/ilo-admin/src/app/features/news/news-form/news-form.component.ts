import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService } from '../../../system-api.service';
import { NewsViewModel, NewsModel } from '../news-data.model';
import { HttpErrorResponse } from '@angular/common/http';

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
  public newsLocaleForm: FormGroup;
  public newsForm: FormGroup;
  private newsId: number;
  public languages: any;
  public isUpdate: Boolean;

  constructor(
    private newsApi: NewsApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.createLocaleForm();
  }

  ngOnInit() {
    this.newsId = +this.activatedRoute.snapshot.paramMap.get('newsId');

    if (this.newsId) {
      this.isUpdate = true;
      this.newsApi
        .getNewsById(this.newsId)
        .subscribe((data: NewsViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.newsForm = this.formBuilder.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      audio: [''],
      image: [''],
      video: ['']
    });
  }

  private createLocaleForm(): void {
    this.newsLocaleForm = this.formBuilder.group({
      newsLocales: this.formBuilder.array([this.generateLocaleForm()])
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
    return this.newsLocaleForm.get('newsLocales') as FormArray;
  }

  addLocale(): void {
    this.newsLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    this.newsLocales.removeAt(index);
  }

  private initializeForm(news: NewsModel): void {
    this.newsForm = this.formBuilder.group({
      header: [news.header, Validators.required],
      content: [news.content, Validators.required],
      audio: [news.audio],
      image: [news.image],
      video: [news.video]
    });
  }

  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      locale: ['', Validators.required],
      audio: [''],
      image: [''],
      video: ['']
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

  private prepareFormData(): NewsModel | null {
    if (this.newsForm.valid) {
      if (this.isUpdate && this.newsId) {
        return {
          ID: this.newsId,
          header: this.header.value,
          content: this.newsContent.value,
          audio: this.audio.value,
          video: this.video.value,
          image: this.image.value
        };
      } else {
        return {
          header: this.header.value,
          content: this.newsContent.value,
          audio: this.audio.value,
          video: this.video.value,
          image: this.image.value
        };
      }
    } else {
      return null;
    }
  }
}

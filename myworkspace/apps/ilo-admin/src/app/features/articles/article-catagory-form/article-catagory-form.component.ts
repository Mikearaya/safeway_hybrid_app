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
  ArticleCatagory,
  ArticleCatagoryLocaleModel
} from '../articles-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService } from '../../../system-api.service';

@Component({
  selector: 'bionic-article-catagory-form',
  templateUrl: './article-catagory-form.component.html',
  styleUrls: ['./article-catagory-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCatagoryFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
  public articleCatagoryForm: FormGroup;
  public articleCatagoryLocaleForm: FormGroup;
  private catagoryId: number;
  public isUpdate: Boolean;
  public languages: any;

  constructor(
    private articleApi: ArticlesApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemApi: SystemApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.catagoryId = +this.activatedRoute.snapshot.paramMap.get('catagoryId');

    this.systemApi
      .getLanguagesList()
      .subscribe(data => (this.languages = data));
    if (this.catagoryId) {
      this.isUpdate = true;
      this.articleApi
        .getArticleCatagoryById(this.catagoryId)
        .subscribe((data: ArticleCatagory) => this.initializeForm(data));
    }
  }
  createForm(): void {
    this.articleCatagoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      catagoryLocales: this.formBuilder.array([this.generateLocaleForm()])
    });
  }

  initializeForm(catagory: ArticleCatagory): void {
    this.articleCatagoryForm = this.formBuilder.group({
      name: [catagory.article_catagory.name, Validators.required],
      catagoryLocales: this.formBuilder.array([])
    });

    catagory.article_catagory_locale.map(element =>
      this.initializeLocaleForm(element)
    );
  }

  initializeLocaleForm(locale: ArticleCatagoryLocaleModel): FormGroup {
    return this.formBuilder.group({
      name: [locale.name, Validators.required],
      locale: [locale.id, Validators.required]
    });
  }

  generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      locale: ['', Validators.required]
    });
  }

  get catagoryName(): FormControl {
    return this.articleCatagoryForm.get('name') as FormControl;
  }
  onSubmit(): void {
    const catagory = this.prepareFormData();

    if (this.isUpdate) {
      this.articleApi
        .updateArticleCatagory(catagory)
        .subscribe(
          () => alert('Article updated '),
          (error: HttpErrorResponse) => alert(error.message)
        );
    } else {
      this.articleApi.createArticleCatagory(catagory).subscribe(
        (data: any) => {
          this.catagoryId = data;
          this.isUpdate = true;
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    }
  }

  get catagoryLocales(): FormArray {
    return this.articleCatagoryForm.get('catagoryLocales') as FormArray;
  }
  prepareFormData(): ArticleCatagory | null {
    const articleCatagory = new ArticleCatagory();

    if (this.articleCatagoryForm.valid) {
      if (this.isUpdate && this.catagoryId) {
        articleCatagory.article_catagory = {
          ID: this.catagoryId,
          name: this.catagoryName.value
        };
      } else {
        articleCatagory.article_catagory = { name: this.catagoryName.value };
      }

      this.catagoryLocales.controls.forEach(element => {
        articleCatagory.article_catagory_locale.push({
          locale: element.value.locale,
          name: element.value.name
        });
      });
      return articleCatagory;
    } else {
      return null;
    }
  }

  deleteLocale(index: number): void {
    this.catagoryLocales.removeAt(index);
  }

  addLocale(index: number): void {
    this.catagoryLocales.controls.push(
      this.formBuilder.group({
        locale: ['', Validators.required],
        name: ['', Validators.required]
      })
    );
  }
}

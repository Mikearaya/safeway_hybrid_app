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
  ArticleCatagoryModel,
  ArticleCatagoryViewModel
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
    this.createLocaleForm();
  }

  ngOnInit() {
    this.catagoryId = +this.activatedRoute.snapshot.paramMap.get('catagoryId');

    this.systemApi.getLanguagesList().subscribe(data => (this.languages = data));
    if (this.catagoryId) {
      this.isUpdate = true;
      this.articleApi
        .getArticleCatagoryById(this.catagoryId)
        .subscribe((data: ArticleCatagoryViewModel) =>
          this.initializeForm(data)
        );
    }
  }
  createForm(): void {
    this.articleCatagoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  initializeForm(catagory: ArticleCatagoryViewModel): void {
    this.articleCatagoryForm = this.formBuilder.group({
      name: [catagory.name, Validators.required]
    });
  }

  createLocaleForm(): void {
    this.articleCatagoryLocaleForm = this.formBuilder.group({
      catagoryLocales: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          locale: ['', Validators.required]
        })
      ])
    });
  }

  initializeLocaleForm(catagoryView: ArticleCatagoryViewModel[]): void {
    this.articleCatagoryLocaleForm = this.formBuilder.group({
      catagoryLocales: this.formBuilder.array([])
    });

    catagoryView.forEach(cat => {
      this.catagoryLocales.controls.push(
        this.formBuilder.group({
          id: [cat.id, Validators.required],
          name: [cat.name, Validators.required],
          locale: [cat.locale, Validators.required]
        })
      );
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
    return this.articleCatagoryLocaleForm.get('catagoryLocales') as FormArray;
  }
  prepareFormData(): ArticleCatagoryModel | null {
    if (this.articleCatagoryForm.valid) {
      if (this.isUpdate && this.catagoryId) {
        return {
          id: this.catagoryId,
          name: this.catagoryName.value
        };
      } else {
        return {
          name: this.catagoryName.value
        };
      }
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

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
  ArticleCatagory,
  ArticleCatagoryLocaleModel
} from '../articles-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService, Guid } from '../../../system-api.service';
import { EmitType, detach } from '@syncfusion/ej2-base';
import {
  UploaderComponent,
  FileInfo,
  SelectedEventArgs
} from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'bionic-article-catagory-form',
  templateUrl: './article-catagory-form.component.html',
  styleUrls: ['./article-catagory-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCatagoryFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' },
    { text: 'File Attachments' }
  ];

  public preLoadFiles: Object[] = [
    {
      name: null,
      size: null,
      type: null
    }
  ];
  public articleCatagoryForm: FormGroup;
  public formId: string;
  public articleCatagoryLocaleForm: FormGroup;
  private catagoryId: number;
  public isUpdate: Boolean;
  public languages: any;
  public deletedIds: number[] = [];
  uploadInput: any;
  public path: Object;

  @ViewChild('defaultupload')
  public defaultupload: UploaderComponent;

  constructor(
    private articleApi: ArticlesApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemApi: SystemApiService
  ) {
    this.createForm();
  }

  get catagoryName(): FormControl {
    return this.articleCatagoryForm.get('name') as FormControl;
  }
  get catagoryLocales(): FormArray {
    return this.articleCatagoryForm.get('catagoryLocales') as FormArray;
  }

  get country(): FormControl {
    return this.articleCatagoryForm.get('country') as FormControl;
  }
  prepareFormData(): ArticleCatagory | null {
    const articleCatagory = new ArticleCatagory();

    if (this.articleCatagoryForm.valid) {
      if (this.isUpdate && this.catagoryId) {
        articleCatagory.article_catagory = {
          ID: this.catagoryId,
          name: this.catagoryName.value,
          country: this.country.value
        };
      } else {
        articleCatagory.article_catagory = {
          name: this.catagoryName.value,
          country: this.country.value
        };
      }

      this.catagoryLocales.controls.forEach(element => {
        articleCatagory.article_catagory_locale.push({
          ID: element.value.id,
          locale: element.value.locale,
          name: element.value.name
        });
      });

      this.deletedIds.forEach(element => {
        articleCatagory.deleted_ids.article_catagory_locale.push(element);
      });

      return articleCatagory;
    } else {
      return null;
    }
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
      id: [Guid.newGuid(), Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      catagoryLocales: this.formBuilder.array([])
    });
  }

  initializeForm(catagory: ArticleCatagory): void {
    this.articleCatagoryForm = this.formBuilder.group({
      name: [catagory.article_catagory.name, Validators.required],
      country: [catagory.article_catagory.country, Validators.required],
      catagoryLocales: this.formBuilder.array([])
    });
    catagory.article_catagory_locale.map(locale =>
      this.catagoryLocales.push(this.initializeLocaleForm(locale))
    );
  }

  initializeLocaleForm(locale: ArticleCatagoryLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [locale.ID, Validators.required],
      name: [locale.name, Validators.required],
      locale: [locale.locale, Validators.required]
    });
  }

  generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      locale: ['', Validators.required]
    });
  }

  deleteLocale(index: number): void {
    const deletedControlId = this.catagoryLocales.controls[index].get('id');
    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.catagoryLocales.removeAt(index);
      }
    } else {
      this.catagoryLocales.removeAt(index);
    }
  }

  addLocale(): void {
    this.catagoryLocales.controls.push(
      this.formBuilder.group({
        locale: ['', Validators.required],
        name: ['', Validators.required]
      })
    );
  }

  onFileSelect: EmitType<Object> = (args: any) => {
    this.uploadInput = args.filesData[0].name;
    console.log(args.filesData[0]);
    console.log(this.articleCatagoryForm.get('image'));
  };

  onSubmit(): void {
    this.defaultupload.upload(this.defaultupload.getFilesData());
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
          alert('Article catagory added successfuly');
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    }
  }
}

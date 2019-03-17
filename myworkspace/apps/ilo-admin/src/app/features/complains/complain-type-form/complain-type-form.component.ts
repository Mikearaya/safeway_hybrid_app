import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ComplainTypeApiService } from '../complain-type-api.service';
import { ActivatedRoute } from '@angular/router';
import { ComplainType, ComplainTypeLocaleModel } from '../complain-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService } from '../../../system-api.service';

@Component({
  selector: 'bionic-complain-type-form',
  templateUrl: './complain-type-form.component.html',
  styleUrls: ['./complain-type-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplainTypeFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  public isUpdate;
  private complainTypeId;
  public complainTypeForm: FormGroup;
  public complainTypeLocaleForm: FormGroup;
  public languages: any;

  constructor(
    private complainTypeApi: ComplainTypeApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.complainTypeId = +this.activatedRoute.snapshot.paramMap.get(
      'complainTypeId'
    );

    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));

    if (this.complainTypeId) {
      this.isUpdate = true;
      this.complainTypeApi
        .getComplainTypeById(this.complainTypeId)
        .subscribe((data: ComplainType) => this.initializeForm(data));
    }
  }

  initializeForm(complainType: ComplainType): void {
    this.complainTypeForm = this.formBuilder.group({
      id: [complainType.complain_type.ID, Validators.required],
      type: [complainType.complain_type.type, Validators.required],
      complainTypeLocales: this.formBuilder.array([])
    });

    complainType.complain_type_locale.map(element =>
      this.initializeLocaleForm(element)
    );
  }

  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      locale: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  private initializeLocaleForm(data: ComplainTypeLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [data.ID, Validators.required],
      locale: [data.locale, Validators.required],
      type: [data.type, Validators.required]
    });
  }
  createForm(): void {
    this.complainTypeForm = this.formBuilder.group({
      id: [''],
      type: ['', Validators.required],
      complainTypeLocales: this.formBuilder.array([])
    });
  }

  addLocale() {
    this.complainTypeLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    this.complainTypeLocales.removeAt(index);
  }

  get type(): FormControl {
    return this.complainTypeForm.get('type') as FormControl;
  }

  get complainTypeLocales(): FormArray {
    return this.complainTypeForm.get('complainTypeLocales') as FormArray;
  }
  onSubmit(): void {
    const formData = this.prepareFormData();
    if (formData) {
      if (this.isUpdate) {
        this.complainTypeApi
          .updateComplainType(formData)
          .subscribe(
            () => alert('Complain type updated successfuly'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      } else {
        this.complainTypeApi.createComplainType(formData).subscribe(
          (data: any) => {
            this.complainTypeId = data;
            this.isUpdate = true;
            alert('complain type added successfuly');
          },
          (error: HttpErrorResponse) => alert(error.message)
        );
      }
    }
  }

  prepareFormData(): ComplainType | null {
    const complainType = new ComplainType();
    if (this.complainTypeForm.valid) {
      if (this.isUpdate && this.complainTypeId) {
        complainType.complain_type = {
          ID: this.complainTypeId,
          type: this.type.value
        };
      } else {
        complainType.complain_type = {
          ID: this.complainTypeId,
          type: this.type.value
        };
      }
      this.complainTypeLocales.controls.forEach(element =>
        complainType.complain_type_locale.push({
          locale: element.value.locale,
          type: element.value.type
        })
      );
      return complainType;
    } else {
      return null;
    }
  }
}

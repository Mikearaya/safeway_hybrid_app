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
import {
  ComplainTypeViewModel,
  ComplainTypeModel
} from '../complain-data.model';
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
    this.createLocaleForm();
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
        .subscribe((data: ComplainTypeViewModel) => this.initializeForm(data));
    }
  }

  initializeForm(complainType: ComplainTypeModel): void {
    this.complainTypeForm = this.formBuilder.group({
      id: [complainType.ID, Validators.required],
      type: [complainType.type, Validators.required]
    });
  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      type: ['', Validators.required]
    });
  }

  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      locale: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  createForm(): void {
    this.complainTypeForm = this.generateForm();
  }

  createLocaleForm(): void {
    this.complainTypeLocaleForm = this.formBuilder.group({
      complainTypeLocales: this.formBuilder.array([this.generateLocaleForm()])
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
    return this.complainTypeLocaleForm.get('complainTypeLocales') as FormArray;
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

  prepareFormData(): ComplainTypeModel | null {
    if (this.complainTypeForm.valid) {
      if (this.isUpdate && this.complainTypeId) {
        return {
          ID: this.complainTypeId,
          type: this.type.value
        };
      } else {
        return { ID: this.complainTypeId, type: this.type.value };
      }
    } else {
      return null;
    }
  }
}

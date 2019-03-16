import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ComplainTypeApiService } from '../complain-type-api.service';
import { ActivatedRoute } from '@angular/router';
import {
  ComplainTypeViewModel,
  ComplainTypeModel
} from '../complain-data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-complain-type-form',
  templateUrl: './complain-type-form.component.html',
  styleUrls: ['./complain-type-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplainTypeFormComponent implements OnInit {
  public isUpdate;
  private complainTypeId;
  public complainTypeForm: FormGroup;
  public complainTypeLocaleForm: FormGroup;

  constructor(
    private complainTypeApi: ComplainTypeApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
    this.createLocaleForm();
  }

  ngOnInit() {
    this.complainTypeId = +this.activatedRoute.snapshot.paramMap.get(
      'complainTypeId'
    );

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
      id: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  createForm(): void {
    this.complainTypeForm = this.generateForm();
  }

  createLocaleForm(): void {
    this.complainTypeLocaleForm = this.formBuilder.group({
      type: ['', Validators.required],
      locale: ['', Validators.required]
    });
  }

  get type(): FormControl {
    return this.complainTypeForm.get('type') as FormControl;
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

import { Component, OnInit } from '@angular/core';
import { AgencyApiService } from '../agency-api.service';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService } from '../../../system-api.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { AgencyViewModel, AgencyModel } from '../agency-data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {
  public agencyForm: FormGroup;
  public agencyLocaleForm: FormGroup;
  public isUpdate: Boolean;
  private agencyId: number;
  public languages: any;

  constructor(
    private agencyApi: AgencyApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.createAgencyLocaleForm();
  }

  ngOnInit() {
    this.agencyId = +this.activatedRoute.snapshot.paramMap.get('agencyId');

    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = this.languages));

    if (this.agencyId) {
      this.isUpdate = true;
      this.agencyApi
        .getAgencyById(this.agencyId)
        .subscribe((data: AgencyViewModel) => this.initializeForm(data));
    }
  }

  createForm(): void {
    this.agencyForm = this.formBuilder.group({
      name: ['', Validators.required],
      region: [''],
      address: [''],
      phoneNumber: [''],
      fax: [''],
      email: ['']
    });
  }

  initializeForm(agency: AgencyViewModel): void {
    this.agencyForm = this.formBuilder.group({
      id: [agency.ID, Validators.required],
      name: [agency.name, Validators.required],
      region: [agency.region],
      address: [agency.address],
      phoneNumber: [agency.phone_number],
      fax: [agency.fax],
      email: [agency.email]
    });
  }

  createAgencyLocaleForm(): void {
    this.agencyForm = this.formBuilder.group({
      agencyLocales: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          region: [''],
          locale: ['', Validators.required],
          address: [''],
          phoneNumber: [''],
          fax: [''],
          email: ['']
        })
      ])
    });
  }

  get agencyName(): FormControl {
    return this.agencyForm.get('name') as FormControl;
  }

  get region(): FormControl {
    return this.agencyForm.get('region') as FormControl;
  }

  get address(): FormControl {
    return this.agencyForm.get('address') as FormControl;
  }
  get fax(): FormControl {
    return this.agencyForm.get('fax') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.agencyForm.get('phoneNumber') as FormControl;
  }
  get email(): FormControl {
    return this.agencyForm.get('email') as FormControl;
  }

  get agencyLocales(): FormArray {
    return this.agencyLocaleForm.get('agencyLocales') as FormArray;
  }

  onSubmit() {
    const formData = this.prepareFormData();

    if (formData) {
      if (this.isUpdate) {
        this.agencyApi
          .updateAgency(formData)
          .subscribe(
            () => alert('agency updated successfuly'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      }
    } else {
      this.agencyApi.createAgency(formData).subscribe(
        (data: any) => {
          this.agencyId = data;
          this.isUpdate = true;
          alert('Agency created successfully');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  prepareFormData(): AgencyModel | null {
    if (this.agencyForm.valid) {
      if (this.isUpdate && this.agencyId) {
        return {
          name: this.agencyName.value,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          email: this.email.value,
          fax: this.fax.value,
          region: this.region.value
        };
      } else {
        return {
          ID: this.agencyId,
          name: this.agencyName.value,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          email: this.email.value,
          fax: this.fax.value,
          region: this.region.value
        };
      }
    } else {
      return null;
    }
  }
}

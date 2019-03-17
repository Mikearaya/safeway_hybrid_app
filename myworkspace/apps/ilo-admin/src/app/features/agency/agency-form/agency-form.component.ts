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
import {
  AgencyViewModel,
  AgencyModel,
  Agency,
  AgencyLocaleModel
} from '../agency-data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
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
  }

  ngOnInit() {
    this.agencyId = +this.activatedRoute.snapshot.paramMap.get('agencyId');

    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));

    if (this.agencyId) {
      this.isUpdate = true;
      this.agencyApi
        .getAgencyById(this.agencyId)
        .subscribe((data: Agency) => this.initializeForm(data));
    }
  }

  createForm(): void {
    this.agencyForm = this.formBuilder.group({
      name: ['', Validators.required],
      region: [1, Validators.required],
      address: [''],
      phoneNumber: ['', Validators.required],
      fax: [''],
      email: [''],
      agencyLocales: this.formBuilder.array([])
    });
  }

  initializeForm(agency: Agency): void {
    this.agencyForm = this.formBuilder.group({
      id: [agency.agency.ID, Validators.required],
      name: [agency.agency.name, Validators.required],
      region: [agency.agency.region, Validators.required],
      address: [agency.agency.address],
      phoneNumber: [agency.agency.phone_number],
      fax: [agency.agency.fax],
      email: [agency.agency.email],
      agencyLocales: this.formBuilder.array([])
    });

    agency.agency_locale.map(local =>
      this.agencyLocales.controls.push(this.initializeLocaleForm(local))
    );
  }

  generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      locale: ['', Validators.required],
      address: ['']
    });
  }

  initializeLocaleForm(locale: AgencyLocaleModel): FormGroup {
    return this.formBuilder.group({
      ID: [locale.ID, Validators.required],
      name: [locale.name, Validators.required],
      locale: [locale.locale, Validators.required],
      address: [locale.address]
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
    return this.agencyForm.get('agencyLocales') as FormArray;
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
  }

  addLocale(): void {
    this.agencyLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    this.agencyLocales.removeAt(index);
  }

  prepareFormData(): Agency | null {
    const agency = new Agency();

    if (this.agencyForm.valid) {
      if (this.isUpdate && this.agencyId) {
        agency.agency = {
          ID: this.agencyId,
          name: this.agencyName.value,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          email: this.email.value,
          fax: this.fax.value,
          region: this.region.value
        };
      } else {
        agency.agency = {
          name: this.agencyName.value,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          email: this.email.value,
          fax: this.fax.value,
          region: this.region.value
        };
      }
      this.agencyLocales.controls.forEach(element => {
        agency.agency_locale.push({
          address: element.value.address,
          locale: element.value.locale,
          name: element.value.name
        });
      });

      return agency;
    } else {
      return null;
    }
  }
}

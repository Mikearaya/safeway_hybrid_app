import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyApiService } from '../agency-api.service';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService, Guid } from '../../../system-api.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { Agency, AgencyLocaleModel } from '../agency-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'bionic-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {
  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  public deletedIds: number[] = [];
  public agencyForm: FormGroup;
  public agencyLocaleForm: FormGroup;
  public isUpdate: Boolean;
  private agencyId: number;
  public languages: any;
  public regionsList: any[];
  formId: any;
  path: { saveUrl: string; removeUrl: string };
  public preLoadFiles: Object[] = [
    {
      name: null,
      size: null,
      type: null
    }
  ];

  constructor(
    private agencyApi: AgencyApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private systemConf: SystemApiService
  ) {
    this.createForm();

    this.formId = Guid.newGuid();
    this.path = {
      saveUrl: `http://localhost/ilo_app/backend/index.php/upload/media/english/${
        this.formId
      }`,
      removeUrl:
        'http://localhost/ilo_app/backend/index.php/upload/media_delete/agency'
    };
  }

  ngOnInit() {
    this.agencyId = +this.activatedRoute.snapshot.paramMap.get('agencyId');

    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));

    this.systemConf
      .getRegionsList()
      .subscribe((data: any) => (this.regionsList = data));

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
      region: ['', Validators.required],
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
    this.defaultUpload.clearAll();
    if (agency.image.length) {
      this.preLoadFiles = agency.image;
    }
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
      id: [locale.ID, Validators.required],
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
    this.defaultUpload.upload(this.defaultUpload.getFilesData());

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
    const deletedControlId = this.agencyLocales.controls[index].get('id');
    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.agencyLocales.removeAt(index);
      }
    } else {
      this.agencyLocales.removeAt(index);
    }
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
          ID: element.value.id,
          address: element.value.address,
          locale: element.value.locale,
          name: element.value.name
        });
      });
      this.deletedIds.forEach(element => {
        agency.deleted_ids.agency_locale.push(element);
      });

      agency.token = this.formId;
      return agency;
    } else {
      return null;
    }
  }
}

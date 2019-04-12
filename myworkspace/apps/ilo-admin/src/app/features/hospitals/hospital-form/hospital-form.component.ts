import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hospital, HospitalLocaleModel } from '../hospital-data.model';
import { HospitalsService } from '../hospitals.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService, Guid } from '../../../system-api.service';
import {
  UploaderComponent,
  ActionCompleteEventArgs
} from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'bionic-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HospitalFormComponent implements OnInit, AfterViewChecked {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public hospitalsForm: FormGroup;
  private hospitalId: number;
  public languages: any[];
  public deletedIds: number[] = [];
  public regionsList: any[] = [];

  isUpdate: boolean;
  formId: string;
  public preLoadFiles: Object[] = [
    {
      name: null,
      size: null,
      type: null
    }
  ];
  path: { saveUrl: string; removeUrl: string };
  constructor(
    private forumBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private hospitalApi: HospitalsService,
    private systemConfig: SystemApiService
  ) {
    this.createForm();

    this.formId = Guid.newGuid();
    this.path = {
      saveUrl: `http://localhost/ilo_app/backend/index.php/upload/media/english/${
        this.formId
      }`,
      removeUrl:
        'http://localhost/ilo_app/backend/index.php/upload/media_delete/hospital'
    };
  }

  ngOnInit() {
    this.hospitalId = +this.activatedRoute.snapshot.paramMap.get('hospitalId');

    if (this.hospitalId) {
      this.path.removeUrl = this.path.removeUrl.concat(
        `/${this.hospitalId.toString()}`
      );
      this.isUpdate = true;
      this.hospitalApi
        .getHospitalById(this.hospitalId)
        .subscribe(
          (data: Hospital) => this.initializeForm(data),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }

    this.systemConfig
      .getRegionsList()
      .subscribe((data: any) => (this.regionsList = data));
    this.systemConfig
      .getLanguagesList()
      .subscribe((lang: any) => (this.languages = lang));
  }

  ngAfterViewChecked(): void {}
  createForm() {
    this.hospitalsForm = this.forumBuilder.group({
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      region: ['', Validators.required],
      hospitalLocale: this.forumBuilder.array([])
    });
  }

  generateLocaleForm(): FormGroup {
    return this.forumBuilder.group({
      address: ['', Validators.required],
      locale: ['', Validators.required],
      name: ['', Validators.required],
      region: ['', Validators.required]
    });
  }

  deleteLocale(index) {
    const deletedControlId = this.hospitalLocales.controls[index].get('id');

    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.hospitalLocales.removeAt(index);
      }
    } else {
      this.hospitalLocales.removeAt(index);
    }
  }

  onSele;

  initializeForm(hospital: Hospital) {
    this.hospitalsForm = this.forumBuilder.group({
      phoneNumber: [hospital.hospital.phone_number, Validators.required],
      address: [hospital.hospital.address, Validators.required],
      name: [hospital.hospital.name, Validators.required],
      region: [hospital.hospital.region, Validators.required],
      hospitalLocale: this.forumBuilder.array([])
    });
    this.defaultUpload.clearAll();
    if (hospital.image.length) {
      this.preLoadFiles = hospital.image;
    }

    hospital.hospital_locale.map(locale =>
      this.hospitalLocales.controls.push(this.initializeLocalesForm(locale))
    );
  }

  get hospitalLocales(): FormArray {
    return this.hospitalsForm.get('hospitalLocale') as FormArray;
  }
  initializeLocalesForm(locale: HospitalLocaleModel) {
    return this.forumBuilder.group({
      id: [locale.ID],
      address: [locale.address, Validators.required],
      name: [locale.name, Validators.required],
      locale: [locale.locale, Validators.required]
    });
  }

  get hospitalName(): FormControl {
    return this.hospitalsForm.get('name') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.hospitalsForm.get('phoneNumber') as FormControl;
  }
  get region(): FormControl {
    return this.hospitalsForm.get('region') as FormControl;
  }

  get address(): FormControl {
    return this.hospitalsForm.get('address') as FormControl;
  }
  addLocale(): void {
    this.hospitalLocales.controls.push(
      this.forumBuilder.group({
        address: ['', Validators.required],
        locale: ['', Validators.required],
        name: ['', Validators.required]
      })
    );
  }

  imageUploaded(event: ActionCompleteEventArgs) {
    const upload = event.fileData.filter(res => res.statusCode === '2');

    if (upload === null) {
      return;
    }
  }
  onSubmit() {
    this.defaultUpload.upload(this.defaultUpload.getFilesData());
    const hospitalData = this.prepareFormData();
    if (hospitalData) {
      if (this.isUpdate) {
        this.hospitalApi
          .updateHospitalAddress(hospitalData)
          .subscribe(
            () => alert('Medical Centers updated successfully'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      } else {
        this.hospitalApi
          .addHospitalAddress(hospitalData)
          .subscribe((data: any) => {
            this.hospitalId = data;
            this.isUpdate = true;
            alert('Medical center added successfuly');
          });
      }
    }
  }

  private prepareFormData(): Hospital | null {
    const hospitalData = new Hospital();
    if (this.hospitalsForm.valid) {
      if (this.isUpdate && this.hospitalId) {
        hospitalData.hospital = {
          ID: this.hospitalId,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.hospitalName.value,
          region: this.region.value
        };
      } else {
        hospitalData.hospital = {
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.hospitalName.value,
          region: this.region.value
        };
      }
      this.hospitalLocales.controls.forEach(element => {
        hospitalData.hospital_locale.push({
          ID: element.value.id,
          address: element.value.address,
          locale: element.value.locale,
          name: element.value.name
        });
      });

      this.deletedIds.map(element =>
        hospitalData.deleted_ids.hospital_locale.push(element)
      );
      hospitalData.token = this.formId;
      return hospitalData;
    } else {
      return null;
    }
  }
}

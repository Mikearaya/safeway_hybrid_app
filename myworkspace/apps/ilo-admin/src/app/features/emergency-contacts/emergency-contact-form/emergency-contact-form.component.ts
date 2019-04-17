import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmergencyContactApiService } from '../emergency-contact-api.service';
import { SystemApiService, Guid } from '../../../system-api.service';
import {
  EmergencyContact,
  EmergencyContactLocaleModel
} from '../emergency-contact-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ActionCompleteEventArgs,
  ClearingEventArgs
} from '@syncfusion/ej2-inputs';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { EnvService } from '../../../env.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'bionic-emergency-contact-form',
  templateUrl: './emergency-contact-form.component.html',
  styleUrls: ['./emergency-contact-form.component.css']
})
export class EmergencyContactFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public regionsList: any[] = [];

  public preLoadFiles: Object[] = [
    {
      name: null,
      size: null,
      type: null
    }
  ];
  public emergencyContactsForm: FormGroup;
  private emergencyContactId: number;
  public languages: any[];
  public deletedIds: number[] = [];
  isUpdate: boolean;
  formId: any;
  path: { saveUrl: string; removeUrl: string };
  constructor(
    private forumBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private emergencyContactsApi: EmergencyContactApiService,
    private systemConfig: SystemApiService,
    private env: EnvService
  ) {
    this.createForm();
    this.formId = Guid.newGuid();
    this.path = { saveUrl: `${environment.apiUrl}/upload/media/english/${this.formId}`, removeUrl: `${environment.apiUrl}/upload/media_delete/emergency_contact` };
  }

  ngOnInit() {
    this.emergencyContactId = +this.activatedRoute.snapshot.paramMap.get(
      'emergencyContactId'
    );

    if (this.emergencyContactId) {
      this.isUpdate = true;
      this.emergencyContactsApi
        .getEmergencyContactById(this.emergencyContactId)
        .subscribe(
          (data: EmergencyContact) => this.initializeForm(data),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }

    this.systemConfig
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));

    this.systemConfig
      .getRegionsList()
      .subscribe((data: any) => (this.regionsList = data));
  }

  createForm() {
    this.emergencyContactsForm = this.forumBuilder.group({
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      region: ['', Validators.required],
      emergencyContactLocale: this.forumBuilder.array([])
    });
  }

  generateLocaleForm(): FormGroup {
    return this.forumBuilder.group({
      address: ['', Validators.required],
      locale: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  initializeLocaleForm(locale: EmergencyContactLocaleModel): FormGroup {
    return this.forumBuilder.group({
      id: [locale.ID, Validators.required],
      address: [locale.address, Validators.required],
      locale: [locale.locale, Validators.required],
      name: [locale.name, Validators.required]
    });
  }

  imageUploaded(event: ActionCompleteEventArgs) {
    const upload = event.fileData.filter(res => res.statusCode === '2');

    if (upload === null) {
      return;
    }
  }
  deleteLocale(index) {
    const deletedControlId = this.emergencyContactLocales.controls[index].get(
      'id'
    );
    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');
      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.emergencyContactLocales.removeAt(index);
      }
    } else {
      this.emergencyContactLocales.removeAt(index);
    }
  }

  initializeForm(emergencyContact: EmergencyContact) {
    this.emergencyContactsForm = this.forumBuilder.group({
      phoneNumber: [
        emergencyContact.emergency_contact.phone_number,
        Validators.required
      ],
      address: [
        emergencyContact.emergency_contact.address,
        Validators.required
      ],
      name: [emergencyContact.emergency_contact.name, Validators.required],
      region: [emergencyContact.emergency_contact.region, Validators.required],
      emergencyContactLocale: this.forumBuilder.array([])
    });
    this.defaultUpload.clearAll();
    if (emergencyContact.image.length) {
      this.preLoadFiles = emergencyContact.image;
    }

    emergencyContact.emergency_contact_locale.map(element =>
      this.emergencyContactLocales.push(this.initializeLocaleForm(element))
    );
  }

  get emergencyContactLocales(): FormArray {
    return this.emergencyContactsForm.get(
      'emergencyContactLocale'
    ) as FormArray;
  }

  get emergencyContactName(): FormControl {
    return this.emergencyContactsForm.get('name') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.emergencyContactsForm.get('phoneNumber') as FormControl;
  }
  get region(): FormControl {
    return this.emergencyContactsForm.get('region') as FormControl;
  }

  get address(): FormControl {
    return this.emergencyContactsForm.get('address') as FormControl;
  }
  addLocale(): void {
    this.emergencyContactLocales.controls.push(this.generateLocaleForm());
  }
  onSubmit() {
    this.defaultUpload.upload(this.defaultUpload.getFilesData());

    setInterval(() => console.log('uploading'), 1000);
    const emergencyContactData = this.prepareFormData();

    if (emergencyContactData) {
      if (this.isUpdate) {
        this.emergencyContactsApi
          .updateEmergencyContactsAddress(emergencyContactData)
          .subscribe(
            () => alert('Emergency contact updated successfuly'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      } else {
        this.emergencyContactsApi
          .addeEmrgencyContactsAddress(emergencyContactData)
          .subscribe(
            (data: any) => {
              this.isUpdate = true;
              this.emergencyContactId = data;
              alert('Emergency contact created successfuly');
            },
            (error: HttpErrorResponse) => alert(error.message)
          );
      }
    }
  }
  removing(data: ClearingEventArgs) {
    console.log(data);
    this.defaultUpload.refresh();
  }
  private prepareFormData(): EmergencyContact | null {
    const emergencyContact = new EmergencyContact();
    if (this.emergencyContactsForm.valid) {
      if (this.isUpdate && this.emergencyContactId) {
        emergencyContact.emergency_contact = {
          ID: this.emergencyContactId,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.emergencyContactName.value,
          region: this.region.value
        };
      } else {
        emergencyContact.emergency_contact = {
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.emergencyContactName.value,
          region: this.region.value
        };
      }
      this.emergencyContactLocales.controls.forEach(element => {
        emergencyContact.emergency_contact_locale.push({
          ID: element.value.id,
          address: element.value.address,
          locale: element.value.locale,
          name: element.value.name
        });
      });

      this.deletedIds.forEach(element => {
        emergencyContact.deleted_ids.emergency_contact_locale.push(element);
      });
      emergencyContact.token = this.formId;
      return emergencyContact;
    } else {
      return null;
    }
  }
}

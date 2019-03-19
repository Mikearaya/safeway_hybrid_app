import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmergencyContactApiService } from '../emergency-contact-api.service';
import { SystemApiService } from '../../../system-api.service';
import {
  EmergencyContactView,
  EmergencyContactModel,
  EmergencyContact,
  EmergencyContactLocaleModel
} from '../emergency-contact-data.model';
import { HttpErrorResponse } from '@angular/common/http';

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
  public emergencyContactsForm: FormGroup;
  private emergencyContactId: number;
  public languages: any[];

  isUpdate: boolean;
  constructor(
    private forumBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private emergencyContactsApi: EmergencyContactApiService,
    private systemConfig: SystemApiService
  ) {
    this.createForm();
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
      name: ['', Validators.required],
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

  deleteLocale(index) {
    this.emergencyContactLocales.removeAt(index);
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
      return emergencyContact;
    } else {
      return null;
    }
  }
}

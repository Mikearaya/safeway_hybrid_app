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
  EmergencyContactModel
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
  public emergencyContactLocalesForm: FormGroup;
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
    this.createLocalesForm();
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
          (data: EmergencyContactView) => this.initializeForm(data),
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
      region: ['', Validators.required]
    });
  }

  createLocalesForm() {
    this.emergencyContactLocalesForm = this.forumBuilder.group({
      emergencyContactLocale: this.forumBuilder.array([
        this.forumBuilder.group({
          address: ['', Validators.required],
          locale: ['', Validators.required],
          name: ['', Validators.required],
          region: ['', Validators.required]
        })
      ])
    });
  }

  deleteLocale(index) {
    this.emergencyContactLocales.removeAt(index);
  }

  initializeForm(emergencyContact: EmergencyContactView) {
    this.emergencyContactsForm = this.forumBuilder.group({
      phoneNumber: [emergencyContact.phone_number, Validators.required],
      address: [emergencyContact.address, Validators.required],
      name: [emergencyContact.name, Validators.required],
      region: [emergencyContact.region, Validators.required]
    });
  }

  generateLocale(emergencyContact: EmergencyContactView): FormGroup {
    return this.forumBuilder.group({
      phoneNumber: [emergencyContact.phone_number, Validators.required],
      address: [emergencyContact.address, Validators.required],
      name: [emergencyContact.name, Validators.required],
      region: [emergencyContact.region, Validators.required]
    });
  }
  get emergencyContactLocales(): FormArray {
    return this.emergencyContactLocalesForm.get(
      'emergencyContactLocale'
    ) as FormArray;
  }
  initializeLocalesForm(emergencyContact: EmergencyContactView[]) {
    this.emergencyContactLocalesForm = this.forumBuilder.group({
      emergencyContactLocale: this.forumBuilder.array([])
    });
    emergencyContact.forEach(locale => {
      this.emergencyContactLocales.controls.push(this.generateLocale(locale));
    });
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
    this.emergencyContactLocales.controls.push(
      this.forumBuilder.group({
        address: ['', Validators.required],
        locale: ['', Validators.required],
        name: ['', Validators.required],
        region: ['', Validators.required]
      })
    );
  }
  onSubmit() {
    const emergencyContactData = this.prepareFormData();

    if (emergencyContactData) {
      if (this.isUpdate) {
        this.emergencyContactsApi
          .updateEmergencyContactsAddress(emergencyContactData)
          .subscribe();
      } else {
        this.emergencyContactsApi
          .addeEmrgencyContactsAddress(emergencyContactData)
          .subscribe();
      }
    }
  }

  private prepareFormData(): EmergencyContactModel | null {
    if (this.emergencyContactsForm.valid) {
      if (this.isUpdate && this.emergencyContactId) {
        return {
          id: this.emergencyContactId,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.emergencyContactName.value,
          region: this.region.value
        };
      } else {
        return {
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.emergencyContactName.value,
          region: this.region.value
        };
      }
    } else {
      return null;
    }
  }
}

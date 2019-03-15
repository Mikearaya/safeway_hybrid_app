import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HospitalModel, HospitalViewModel } from '../hospital-data.model';
import { HospitalsService } from '../hospitals.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemApiService } from '../../../system-api.service';

@Component({
  selector: 'bionic-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HospitalFormComponent implements OnInit {
  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
  public hospitalsForm: FormGroup;
  public hospitalLocalesForm: FormGroup;
  private hospitalId: number;
  public languages: any[];

  isUpdate: boolean;
  constructor(
    private forumBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private hospitalApi: HospitalsService,
    private systemConfig: SystemApiService
  ) {
    this.createForm();
    this.createLocalesForm();
  }

  ngOnInit() {
    this.hospitalId = +this.activatedRoute.snapshot.paramMap.get('hospitalId');

    if (this.hospitalId) {
      this.isUpdate = true;
      this.hospitalApi
        .getHospitalById(this.hospitalId)
        .subscribe(
          (data: HospitalViewModel) => this.initializeForm(data),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }

    this.systemConfig
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));


  }

  createForm() {
    this.hospitalsForm = this.forumBuilder.group({
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      region: ['', Validators.required]
    });
  }

  createLocalesForm() {
    this.hospitalLocalesForm = this.forumBuilder.group({
      hospitalLocale: this.forumBuilder.array([
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
    this.hospitalLocales.removeAt(index);
  }

  initializeForm(hospital: HospitalViewModel) {
    this.hospitalsForm = this.forumBuilder.group({
      phoneNumber: [hospital.phone_number, Validators.required],
      address: [hospital.address, Validators.required],
      name: [hospital.name, Validators.required],
      region: [hospital.region, Validators.required]
    });
  }

  generateLocale(hospital: HospitalViewModel): FormGroup {
    return this.forumBuilder.group({
      phoneNumber: [hospital.phone_number, Validators.required],
      address: [hospital.address, Validators.required],
      name: [hospital.name, Validators.required],
      region: [hospital.region, Validators.required]
    });
  }
  get hospitalLocales(): FormArray {
    return this.hospitalLocalesForm.get('hospitalLocale') as FormArray;
  }
  initializeLocalesForm(hospital: HospitalViewModel[]) {
    this.hospitalLocalesForm = this.forumBuilder.group({
      hospitalLocale: this.forumBuilder.array([])
    });
    hospital.forEach(locale => {
      this.hospitalLocales.controls.push(this.generateLocale(locale));
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
        name: ['', Validators.required],
        region: ['', Validators.required]
      })
    );
  }
  onSubmit() {
    const hospitalData = this.prepareFormData();

    if (hospitalData) {
      if (this.isUpdate) {
        this.hospitalApi.updateHospitalAddress(hospitalData).subscribe();
      } else {
        this.hospitalApi.addHospitalAddress(hospitalData).subscribe();
      }
    }
  }

  private prepareFormData(): HospitalModel | null {
    if (this.hospitalsForm.valid) {
      if (this.isUpdate && this.hospitalId) {
        return {
          id: this.hospitalId,
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.hospitalName.value,
          region: this.region.value
        };
      } else {
        return {
          phone_number: this.phoneNumber.value,
          address: this.address.value,
          name: this.hospitalName.value,
          region: this.region.value
        };
      }
    } else {
      return null;
    }
  }
}

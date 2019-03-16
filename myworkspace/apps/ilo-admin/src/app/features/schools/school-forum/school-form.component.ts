import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolApiService } from '../school-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService } from '../../../system-api.service';
import { SchoolViewModel } from '../school-type.model';

@Component({
  selector: 'bionic-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolFormComponent implements OnInit {
  public schoolForm: FormGroup;
  public schoolLocaleForm: FormGroup;
  private schoolId: number;
  public languages: any[];
  public isUpdate: Boolean;

  constructor(
    private schoolApi: SchoolApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.createLocaleForm();
  }

  ngOnInit() {
    this.schoolId = +this.activatedRoute.snapshot.paramMap.get('schoolId');

    if (this.schoolId) {
      this.isUpdate = true;
      this.schoolApi
        .getSchoolById(this.schoolId)
        .subscribe((data: SchoolViewModel) => this.initializeForm(data));
    }

    this.systemConf
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));
  }

  private createForm(): void {
    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.required],
      lessons: ['', Validators.required],
      region: ['', Validators.required],
      address: [''],
      phoneNumber: ['', Validators.required]
    });
  }

  private initializeForm(data: SchoolViewModel): void {
    this.schoolForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      lessons: [data.LESSON_ID, Validators.required],
      region: [data.region, Validators.required],
      address: [data.address],
      phoneNumber: [data.phone_number, Validators.required]
    });
  }

  private createLocaleForm(): void {
    this.schoolLocaleForm = this.formBuilder.group({
      schoolLocales: this.formBuilder.array([this.generateLocalesForm()])
    });
  }

  get name(): FormControl {
    return this.schoolForm.get('name') as FormControl;
  }

  get region(): FormControl {
    return this.schoolForm.get('region') as FormControl;
  }

  get lessons(): FormControl {
    return this.schoolForm.get('lessons') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.schoolForm.get('phoneNumber') as FormControl;
  }

  get address(): FormControl {
    return this.schoolForm.get('address') as FormControl;
  }

  get schoolLocales(): FormArray {
    return this.schoolForm.get('schoolLocales') as FormArray;
  }

  addLocale(): void {
    this.schoolLocales.controls.push(this.generateLocalesForm());
  }

  deleteLocale(index: number): void {
    this.schoolLocales.removeAt(index);
  }

  private generateLocalesForm(): FormGroup {
    return this.formBuilder.group({
      locale: ['', Validators.required],
      name: ['', Validators.required],
      lessons: ['', Validators.required],
      region: ['', Validators.required],
      address: [''],
      phoneNumber: ['', Validators.required]
    });
  }
}

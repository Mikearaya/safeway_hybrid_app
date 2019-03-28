import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SchoolApiService } from '../school-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService, Guid } from '../../../system-api.service';
import {
  SchoolViewModel,
  SchoolModel,
  School,
  SchoolLocaleModel
} from '../school-type.model';
import { HttpErrorResponse } from '@angular/common/http';
import { LessonTypeService } from '../lesson-type.service';
import { LessonTypeViewModel } from '../lesson-type.model';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'bionic-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolFormComponent implements OnInit {
  @ViewChild('defaultupload')
  public defaultUpload: UploaderComponent;

  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];

  public fields: Object = { text: 'type', value: 'ID' };
  public data: LessonTypeViewModel[] = [];
  public schoolForm: FormGroup;
  public schoolLocaleForm: FormGroup;
  private schoolId: number;
  public languages: any[];
  public isUpdate: Boolean;
  public deletedLocaleIds: number[] = [];
  public deletedLessonIds: number[] = [];

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
    private schoolApi: SchoolApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService,
    private lessonTypeApi: LessonTypeService
  ) {
    this.createForm();

    this.formId = Guid.newGuid();
    this.path = {
      saveUrl: `http://localhost/ilo_app/backend/index.php/upload/media/english/${
        this.formId
      }`,
      removeUrl:
        'http://localhost/ilo_app/backend/index.php/upload/media_delete/school'
    };
  }

  ngOnInit() {
    this.schoolId = +this.activatedRoute.snapshot.paramMap.get('schoolId');
    this.lessonTypeApi
      .getLessonTypeList()
      .subscribe((data: LessonTypeViewModel[]) => (this.data = data));

    if (this.schoolId) {
      this.isUpdate = true;
      this.schoolApi
        .getSchoolById(this.schoolId)
        .subscribe((data: School) => this.initializeForm(data));
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
      fax: [''],
      email: [''],
      phoneNumber: ['', Validators.required],
      schoolLocales: this.formBuilder.array([])
    });
  }

  private initializeForm(data: School): void {
    this.schoolForm = this.formBuilder.group({
      name: [data.school.name, Validators.required],
      lessons: [data.school_lessons.map(l => l.LESSON_ID), Validators.required],
      region: [data.school.region, Validators.required],
      address: [data.school.address],
      fax: [data.school.fax],
      email: [data.school.email],
      phoneNumber: [data.school.phone_number, Validators.required],
      schoolLocales: this.formBuilder.array([])
    });

    this.preLoadFiles = data.image;
    data.school_locale.map(l =>
      this.schoolLocales.controls.push(this.initializeLocalesForm(l))
    );
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

  get fax(): FormControl {
    return this.schoolForm.get('fax') as FormControl;
  }

  get email(): FormControl {
    return this.schoolForm.get('email') as FormControl;
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
    const deletedControlId = this.schoolLocales.controls[index].get('id');

    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        alert(deletedControlId.value);
        this.deletedLocaleIds.push(deletedControlId.value);
        this.schoolLocales.removeAt(index);
      }
    } else {
      this.schoolLocales.removeAt(index);
    }
  }

  lessonRemoved(data: any): void {
    console.log(data);
    this.deletedLessonIds.push(data.itemData.ID);
  }

  private generateLocalesForm(): FormGroup {
    return this.formBuilder.group({
      locale: ['', Validators.required],
      name: ['', Validators.required],
      address: ['']
    });
  }

  private initializeLocalesForm(locale: SchoolLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [locale.ID, Validators.required],
      locale: [locale.locale, Validators.required],
      name: [locale.name, Validators.required],
      address: [locale.address]
    });
  }

  onSubmit(): void {
    this.defaultUpload.upload(this.defaultUpload.getFilesData());

    const formData = this.prepareFormData();
    if (formData) {
      if (this.isUpdate) {
        this.schoolApi
          .updateSchool(formData)
          .subscribe(
            () => alert('School updated successfuly'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      } else {
        this.schoolApi.createSchool(formData).subscribe(
          (data: any) => {
            this.isUpdate = true;
            this.schoolId = data;
            alert('School created successfuly');
          },
          (error: HttpErrorResponse) => alert(error.message)
        );
      }
    } else {
      return null;
    }
  }

  private prepareFormData(): School | null {
    const schoolData = new School();
    if (this.schoolForm.valid) {
      if (this.isUpdate && this.schoolId) {
        schoolData.school = {
          ID: this.schoolId,
          address: this.address.value,
          name: this.name.value,
          phone_number: this.phoneNumber.value,
          region: this.region.value,
          fax: this.fax.value,
          email: this.email.value
        };
      } else {
        schoolData.school = {
          address: this.address.value,
          name: this.name.value,
          phone_number: this.phoneNumber.value,
          region: this.region.value,
          fax: this.fax.value,
          email: this.email.value
        };
      }

      this.lessons.value.forEach(element => {
        schoolData.school_lessons.push({
          LESSON_ID: element
        });
      });

      this.schoolLocales.controls.forEach(element => {
        schoolData.school_locale.push({
          ID: element.value.id,
          address: element.value.address,
          name: element.value.name,
          locale: element.value.locale
        });
      });

      this.deletedLocaleIds.forEach(element => {
        schoolData.deleted_ids.school_locale.push(element);
      });

      this.deletedLessonIds.forEach(element =>
        schoolData.deleted_ids.school_lessons.push(element)
      );
      schoolData.token = this.formId;
      return schoolData;
    } else {
      return null;
    }
  }
}

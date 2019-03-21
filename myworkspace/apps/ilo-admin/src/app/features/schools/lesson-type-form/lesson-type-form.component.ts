import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonTypeService } from '../lesson-type.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService } from '../../../system-api.service';
import { LessonType, LessonTypeLocaleModel } from '../lesson-type.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-lesson-type-form',
  templateUrl: './lesson-type-form.component.html',
  styleUrls: ['./lesson-type-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonTypeFormComponent implements OnInit {
  public lessonTypeForm: FormGroup;
  public lessonTypeLocaleForm: FormGroup;
  private lessonTypeId: number;
  public isUpdate: Boolean;
  public languages: any;
  public deletedIds: number[] = [];

  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
  constructor(
    private lessonTypeApi: LessonTypeService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.lessonTypeId = +this.activatedRoute.snapshot.paramMap.get(
      'lessonTypeId'
    );

    if (this.lessonTypeId) {
      this.isUpdate = true;
      this.lessonTypeApi
        .getLessonTypeById(this.lessonTypeId)
        .subscribe((data: LessonType) => this.initializeForm(data));
    }

    this.systemConf
      .getLanguagesList()
      .subscribe(data => (this.languages = data));
  }

  private createForm(): void {
    this.lessonTypeForm = this.formBuilder.group({
      type: ['', Validators.required],
      lessonTypeLocales: this.formBuilder.array([])
    });
  }

  private initializeForm(lesson: LessonType): void {
    this.lessonTypeForm = this.formBuilder.group({
      id: [lesson.lesson_types.ID, Validators.required],
      type: [lesson.lesson_types.type, Validators.required],
      lessonTypeLocales: this.formBuilder.array([])
    });

    lesson.lesson_type_locale.forEach(element => {
      this.lessonTypeLocales.controls.push(this.initializeLocaleForm(element));
    });
  }

  get type(): FormControl {
    return this.lessonTypeForm.get('type') as FormControl;
  }

  get lessonTypeLocales(): FormArray {
    return this.lessonTypeForm.get('lessonTypeLocales') as FormArray;
  }

  onSubmit(): void {
    const formData = this.prepareFormData();
    if (formData) {
      if (this.isUpdate) {
        this.lessonTypeApi
          .updateLessonType(formData)
          .subscribe(
            () => alert('Lesson type updated successfully'),
            (error: HttpErrorResponse) => alert(error.message)
          );
      } else {
        this.lessonTypeApi.createLessonType(formData).subscribe(
          (data: any) => {
            this.lessonTypeId = data;
            this.isUpdate = true;
            alert('lesson type created successfully');
          },
          (error: HttpErrorResponse) => alert(error.message)
        );
      }
    }
  }

  private prepareFormData(): LessonType | null {
    const lessonType = new LessonType();

    if (this.lessonTypeForm.valid) {
      if (this.isUpdate && this.lessonTypeId) {
        lessonType.lesson_types = {
          ID: this.lessonTypeId,
          type: this.type.value
        };
      } else {
        lessonType.lesson_types = {
          type: this.type.value
        };
      }

      this.lessonTypeLocales.controls.forEach(element => {
        lessonType.lesson_type_locale.push({
          ID: element.value.id,
          type: element.value.type,
          locale: element.value.locale
        });
      });
      this.deletedIds.map(element =>
        lessonType.deleted_ids.lesson_type_locale.push(element)
      );

      return lessonType;
    } else {
      return null;
    }
  }

  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      locale: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  private initializeLocaleForm(locale: LessonTypeLocaleModel): FormGroup {
    return this.formBuilder.group({
      id: [locale.ID, Validators.required],
      locale: [locale.locale, Validators.required],
      type: [locale.type, Validators.required]
    });
  }

  addLocale(): void {
    this.lessonTypeLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    const deletedControlId = this.lessonTypeLocales.controls[index].get('id');

    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.lessonTypeLocales.removeAt(index);
      }
    } else {
      this.lessonTypeLocales.removeAt(index);
    }
  }
}

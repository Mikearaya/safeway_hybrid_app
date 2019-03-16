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
import { LessonTypeViewModel, LessonTypeModel } from '../lesson-type.model';
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

  constructor(
    private lessonTypeApi: LessonTypeService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private systemConf: SystemApiService
  ) {
    this.createForm();
    this.createLocaleForm();
  }

  ngOnInit() {
    this.lessonTypeId = +this.activatedRoute.snapshot.paramMap.get(
      'lessonTypeId'
    );

    if (this.lessonTypeId) {
      this.isUpdate = true;
      this.lessonTypeApi
        .getLessonTypeById(this.lessonTypeId)
        .subscribe((data: LessonTypeViewModel) => this.initializeForm(data));
    }

    this.systemConf
      .getLanguagesList()
      .subscribe(data => (this.languages = data));
  }

  private createForm(): void {
    this.formBuilder.group({
      type: ['', Validators.required]
    });
  }

  private createLocaleForm(): void {
    this.lessonTypeForm = this.formBuilder.group({
      lessonTypeLocales: this.formBuilder.array([this.generateLocaleForm()])
    });
  }

  private initializeForm(lesson: LessonTypeViewModel): void {
    this.lessonTypeForm = this.formBuilder.group({
      id: [lesson.ID, Validators.required],
      type: [lesson.type, Validators.required]
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

  private prepareFormData(): LessonTypeModel | null {
    if (this.lessonTypeForm.valid) {
      if (this.isUpdate && this.lessonTypeId) {
        return {
          type: this.type.value
        };
      }
    }
  }
  private generateLocaleForm(): FormGroup {
    return this.formBuilder.group({
      locale: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  addLocale(): void {
    this.lessonTypeLocales.controls.push(this.generateLocaleForm());
  }

  deleteLocale(index: number): void {
    this.lessonTypeLocales.removeAt(index);
  }
}

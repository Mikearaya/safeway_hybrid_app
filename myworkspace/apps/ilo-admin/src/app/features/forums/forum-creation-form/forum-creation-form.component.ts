import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemApiService } from '../../../system-api.service';
import { ForumApiService } from '../forum-api.service';
import { ForumViewModel, ForumModel } from '../forum-data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'bionic-forum-creation-form',
  templateUrl: './forum-creation-form.component.html',
  styleUrls: ['./forum-creation-form.component.css']
})
export class ForumCreationFormComponent implements OnInit {
  @ViewChild('tab')
  public tab: TabComponent;

  public headerText: Object = [
    { text: 'Enlish Language (default)' },
    { text: 'Other Languages' }
  ];
  public forumForm: FormGroup;
  public forumLocaleForm: FormGroup;
  private forumId: number;
  public languages: any[];

  isUpdate: boolean;
  constructor(
    private forumBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private forumApi: ForumApiService,
    private systemConfig: SystemApiService
  ) {
    this.createForm();
    this.createLocalesForm();
  }

  ngOnInit() {
    this.forumId = +this.activatedRoute.snapshot.paramMap.get('forumId');

    if (this.forumId) {
      this.isUpdate = true;
      this.forumApi
        .getForumById(this.forumId)
        .subscribe(
          (data: ForumViewModel) => this.initializeForm(data),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }

    this.systemConfig
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));
  }

  createForm() {
    this.forumForm = this.forumBuilder.group({
      topic: ['', Validators.required]
    });
  }

  createLocalesForm() {
    this.forumLocaleForm = this.forumBuilder.group({
      forumLocale: this.forumBuilder.array([
        this.forumBuilder.group({
          topic: ['', Validators.required]
        })
      ])
    });
  }

  deleteLocale(index) {
    this.forumLocales.removeAt(index);
  }

  initializeForm(forum: ForumViewModel) {
    this.forumForm = this.forumBuilder.group({
      id: [forum.id],
      topic: [forum.name, Validators.required]
    });
  }

  generateLocale(forum: ForumViewModel): FormGroup {
    return this.forumBuilder.group({
      topic: [forum.name, Validators.required],
      id: [forum.id, Validators.required]
    });
  }
  get forumLocales(): FormArray {
    return this.forumLocaleForm.get('forumLocale') as FormArray;
  }
  initializeLocalesForm(forums: ForumViewModel[]) {
    this.forumLocaleForm = this.forumBuilder.group({
      forumLocale: this.forumBuilder.array([])
    });
    forums.forEach(locale => {
      this.forumLocales.controls.push(this.generateLocale(locale));
    });
  }

  get topic(): FormControl {
    return this.forumForm.get('topic') as FormControl;
  }

  addLocale(): void {
    this.forumLocales.controls.push(
      this.forumBuilder.group({
        locale: ['', Validators.required],
        topic: ['', Validators.required]
      })
    );
  }
  onSubmit() {
    const emergencyContactData = this.prepareFormData();

    if (emergencyContactData) {
      if (this.isUpdate) {
        this.forumApi
          .updateForum(emergencyContactData)
          .subscribe(() => alert('Forum updated successfuly'));
      } else {
        this.forumApi.addForum(emergencyContactData).subscribe((data: any) => {
          this.isUpdate = true;
          this.forumId = data;
          alert('Forum created successfully');
        });
      }
    }
  }

  private prepareFormData(): ForumModel | null {
    if (this.forumForm.valid) {
      if (this.isUpdate && this.forumId) {
        return {
          id: this.forumId,
          name: this.topic.value
        };
      } else {
        return {
          name: this.topic.value
        };
      }
    } else {
      return null;
    }
  }
}

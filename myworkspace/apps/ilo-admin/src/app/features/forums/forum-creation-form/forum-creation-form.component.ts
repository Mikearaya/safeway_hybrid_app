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
import { Forum, ForumLocaleModel } from '../forum-data.model';
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
  public deletedIds: number[] = [];

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
  }

  ngOnInit() {
    this.forumId = +this.activatedRoute.snapshot.paramMap.get('forumId');

    if (this.forumId) {
      this.isUpdate = true;
      this.forumApi
        .getForumById(this.forumId)
        .subscribe(
          (data: Forum) => this.initializeForm(data),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }

    this.systemConfig
      .getLanguagesList()
      .subscribe((data: any) => (this.languages = data));
  }

  createForm() {
    this.forumForm = this.forumBuilder.group({
      topic: ['', Validators.required],
      forumLocale: this.forumBuilder.array([])
    });
  }

  deleteLocale(index) {
    const deletedControlId = this.forumLocales.controls[index].get('id');
    if (deletedControlId) {
      const conf = confirm('Are you sure you want to delete');

      if (conf) {
        this.deletedIds.push(deletedControlId.value);
        this.forumLocales.removeAt(index);
      }
    } else {
      this.forumLocales.removeAt(index);
    }
  }

  initializeForm(forum: Forum) {
    this.forumForm = this.forumBuilder.group({
      id: [forum.forum.ID, Validators.required],
      topic: [forum.forum.title, Validators.required],
      forumLocale: this.forumBuilder.array([])
    });
    forum.forum_locale.forEach(locale => {
      this.forumLocales.controls.push(this.initializeLocale(locale));
    });
  }

  generateLocale(): FormGroup {
    return this.forumBuilder.group({
      name: ['', Validators.required],
      locale: ['', Validators.required]
    });
  }

  initializeLocale(forum: ForumLocaleModel): FormGroup {
    return this.forumBuilder.group({
      id: [forum.ID, Validators.required],
      locale: [forum.locale, Validators.required],
      name: [forum.title, Validators.required]
    });
  }
  get forumLocales(): FormArray {
    return this.forumForm.get('forumLocale') as FormArray;
  }

  get topic(): FormControl {
    return this.forumForm.get('topic') as FormControl;
  }

  addLocale(): void {
    this.forumLocales.controls.push(this.generateLocale());
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

  private prepareFormData(): Forum | null {
    const forum = new Forum();

    if (this.forumForm.valid) {
      if (this.isUpdate && this.forumId) {
        forum.forum = {
          ID: this.forumId,
          title: this.topic.value
        };
      } else {
        forum.forum = {
          title: this.topic.value
        };
      }

      this.forumLocales.controls.forEach(element => {
        forum.forum_locale.push({
          locale: element.value.locale,
          title: element.value.name,
          ID: element.value.id
        });
      });

      this.deletedIds.map(element =>
        forum.deleted_ids.forum_locale.push(element)
      );

      return forum;
    } else {
      return null;
    }
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonTypeService } from '../lesson-type.service';
import { LessonTypeViewModel } from '../lesson-type.model';
import { CustomGridColumns } from '@bionic/shared-component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-lesson-type-view',
  templateUrl: './lesson-type-view.component.html',
  styleUrls: ['./lesson-type-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonTypeViewComponent implements OnInit {
  public data: LessonTypeViewModel[];
  public columnsList: CustomGridColumns[] = [
    {
      header: 'ID',
      key: 'ID',
      type: 'number',
      visible: false
    },
    {
      header: 'Lesson Type',
      key: 'type',
      type: 'string',
      visible: true
    },
    {
      header: 'Added',
      key: 'date_added',
      type: 'date',
      format: 'yMd',
      visible: false,
      width: 100
    },
    {
      header: 'Updated',
      key: 'date_updated',
      type: 'date',
      format: 'yMd',
      visible: false,
      width: 100
    }
  ];

  constructor(private lessonTypeApi: LessonTypeService) {}

  ngOnInit() {
    this.lessonTypeApi
      .getLessonTypeList()
      .subscribe((data: LessonTypeViewModel[]) => (this.data = data));
  }

  deleteLessonType(data: any): void {
    this.lessonTypeApi
      .deletelessonType(data.ID)
      .subscribe(
        () => alert('Lesson type deleted successfully'),
        (error: HttpErrorResponse) => alert(error.message)
      );
  }
}

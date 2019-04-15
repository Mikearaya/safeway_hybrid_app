/*
 * @CreateTime: Mar 16, 2019 3:16 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 16, 2019 3:19 PM
 * @Description: Modify Here, Please
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolApiService } from '../school-api.service';
import { SchoolViewModel } from '../school-type.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolViewComponent implements OnInit {
  public data: Object[] = [];
  public columnsList: CustomGridColumns[] = [
    {
      header: 'ID',
      key: 'ID',
      type: 'number',
      visible: false
    },
    {
      header: 'School Name',
      key: 'name',
      type: 'string',
      visible: true
    },
    {
      header: 'Address',
      key: 'address',
      type: 'string',
      visible: true,
      width: 150
    },
    {
      header: 'Region',
      key: 'region',
      type: 'string',
      visible: true,
      width: 100
    },
    {
      header: 'Lessons',
      key: 'LESSON_ID',
      type: 'string',
      visible: true,
      width: 100
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
  constructor(private schoolApi: SchoolApiService) {}

  ngOnInit() {
    this.schoolApi
      .getSchoolsList()
      .subscribe((data: SchoolViewModel[]) => (this.data = data));
  }

  deleteSchool(data: any): void {
    this.schoolApi
      .deleteSchool([data.ID])
      .subscribe(
        () => alert('School deleted successfully'),
        (error: HttpErrorResponse) => alert(error.message)
      );
  }
}

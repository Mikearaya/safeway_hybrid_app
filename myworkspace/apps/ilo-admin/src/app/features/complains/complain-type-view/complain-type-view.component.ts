import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComplainTypeApiService } from '../complain-type-api.service';
import { ComplainTypeViewModel } from '../complain-data.model';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-complain-type-view',
  templateUrl: './complain-type-view.component.html',
  styleUrls: ['./complain-type-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplainTypeViewComponent implements OnInit {
  public data: ComplainTypeViewModel[] = [];
  public columnsList: CustomGridColumns[] = [
    {
      key: 'ID',
      width: 50,
      header: 'id',
      type: 'string'
    },
    {
      key: 'type',
      header: 'Complain type',
      type: 'string'
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
  constructor(private complainTypeApi: ComplainTypeApiService) {}

  ngOnInit() {
    this.complainTypeApi.getAllComplainTypes().subscribe(
      (data: ComplainTypeViewModel[]) => this.data = data
    )
  }
}

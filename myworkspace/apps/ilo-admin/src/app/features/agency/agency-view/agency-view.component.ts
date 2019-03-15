import { Component, OnInit } from '@angular/core';
import { AgencyViewModel } from '../agency-data.model';
import { CustomGridColumns } from '@bionic/shared-component';
import { AgencyApiService } from '../agency-api.service';

@Component({
  selector: 'bionic-agency-view',
  templateUrl: './agency-view.component.html',
  styleUrls: ['./agency-view.component.css']
})
export class AgencyViewComponent implements OnInit {
  public data: AgencyViewModel[];
  public columnList: CustomGridColumns[] = [
    {
      key: 'ID',
      width: 50,
      header: 'id',
      type: 'string'
    },
    {
      key: 'name',
      header: 'Agency name',
      type: 'string'
    },
    {
      header: 'Phonenumber',
      key: 'phone_number',
      type: 'string',
      visible: true,
      width: 100
    },
    {
      header: 'Address',
      key: 'address',
      type: 'string',
      visible: true,
      width: 100
    },
    {
      header: 'Email',
      key: 'email',
      type: 'string',
      visible: false,
      width: 100
    },
    {
      header: 'Region',
      key: 'region',
      type: 'string',
      visible: true,
      width: 100
    },
    {
      header: 'Fax',
      key: 'fax',
      type: 'string',
      visible: false,
      width: 100
    },
    {
      header: 'Added',
      key: 'date_added',
      type: 'date',
      visible: false,
      width: 100
    },
    {
      header: 'Updated',
      key: 'date_updated',
      type: 'date',
      visible: false,
      width: 100
    }
  ];
  constructor(private agencyApi: AgencyApiService) {}

  ngOnInit() {
    this.agencyApi
      .getAgenciesList()
      .subscribe((data: AgencyViewModel[]) => (this.data = data));
  }
}

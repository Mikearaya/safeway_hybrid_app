import { Component, OnInit } from '@angular/core';
import { EmergencyContactApiService } from '../emergency-contact-api.service';
import { CustomGridColumns } from '@bionic/shared-component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-emergency-contact-view',
  templateUrl: './emergency-contact-view.component.html',
  styleUrls: ['./emergency-contact-view.component.css']
})
export class EmergencyContactViewComponent implements OnInit {
  data: any[];
  columnList: CustomGridColumns[] = [
    {
      key: 'id',
      width: 50,
      header: 'id',
      type: 'string'
    },
    {
      key: 'name',
      header: 'Contact name',
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

  constructor(private emergencyContactsApi: EmergencyContactApiService) {}

  ngOnInit() {
    this.emergencyContactsApi
      .getEmergencyContactssList()
      .subscribe((data: any) => (this.data = data));
  }

  deleteEmergencyContact(data: any): void {
    this.emergencyContactsApi
      .deleteEmergencyContactsAddress([data.ID])
      .subscribe(
        () => alert('Emergency contact deleted successfuly'),
        (error: HttpErrorResponse) => alert(error.message)
      );
  }
}

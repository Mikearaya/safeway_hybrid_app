import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomGridColumns } from '@bionic/shared-component';
import { HospitalsService } from '../hospitals.service';
import { HospitalViewModel } from '../hospital-data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-hospitals-view',
  templateUrl: './hospitals-view.component.html',
  styleUrls: ['./hospitals-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HospitalsViewComponent implements OnInit {
  public data: any;
  public columnsList: CustomGridColumns[] = [
    {
      header: 'Hospital Name',
      key: 'name',
      type: 'string',
      visible: true
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
  constructor(private hospitalApi: HospitalsService) {}

  ngOnInit() {
    this.hospitalApi
      .getHospitalsList()
      .subscribe((data: HospitalViewModel[]) => (this.data = data));
  }

  deleteMedicalCenter(data: any): void {
    this.hospitalApi
      .deleteHospitalAddress([data.ID])
      .subscribe(
        () => alert('Medical center deleted successfuly'),
        (error: HttpErrorResponse) => alert(error.message)
      );
  }
}

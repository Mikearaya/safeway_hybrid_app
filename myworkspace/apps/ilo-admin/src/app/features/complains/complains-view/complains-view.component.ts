import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComplainApiService } from '../complain-api.service';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-complains-view',
  templateUrl: './complains-view.component.html',
  styleUrls: ['./complains-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplainsViewComponent implements OnInit {
  public data: any[];
  columnsBluePrint: CustomGridColumns[] = [
    {
      key: 'ID',
      header: 'ID',
      type: 'number'
    },
    {
      key: 'barcode',
      header: 'Barcode no.',
      type: 'string'
    },
    {
      key: 'passport_id',
      header: 'Passport no.',
      type: 'string'
    },
    {
      key: 'complain_type',
      header: 'Reason',
      type: 'string'
    },
    { key: 'date_added', header: 'Added', type: 'date' }
  ];
  constructor(private complainApi: ComplainApiService) {}

  ngOnInit() {
    this.complainApi.getAllComplains().subscribe(data => (this.data = data));
  }
}

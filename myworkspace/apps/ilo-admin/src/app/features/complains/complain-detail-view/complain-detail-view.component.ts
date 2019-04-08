import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComplainApiService } from '../complain-api.service';
import { ActivatedRoute } from '@angular/router';
import { ComplainViewModel } from '../complain-data.model';

@Component({
  selector: 'bionic-complain-detail-view',
  templateUrl: './complain-detail-view.component.html',
  styleUrls: ['./complain-detail-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplainDetailViewComponent implements OnInit {
  complainId: number;
  complain: ComplainViewModel;
  constructor(
    private complainApi: ComplainApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.complainId = +this.activatedRoute.snapshot.paramMap.get('complainId');

    if (this.complainId) {
      this.complainApi
        .getComplainById(this.complainId)
        .subscribe((data: ComplainViewModel) => {
          this.complain = data;
        });
    }
  }
}

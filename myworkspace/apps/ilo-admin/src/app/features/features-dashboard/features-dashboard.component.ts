import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SystemApiService } from '../../system-api.service';
import { DashboardStatModel } from '../features.component';

@Component({
  selector: 'bionic-features-dashboard',
  templateUrl: './features-dashboard.component.html',
  styleUrls: ['./features-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesDashboardComponent implements OnInit {
  public dashboard: DashboardStatModel;

  constructor(private systemConf: SystemApiService) {}

  ngOnInit() {
    this.systemConf
      .getSystemStatstics()
      .subscribe(data => (this.dashboard = data));
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { SharedComponentModule } from '@bionic/shared-component';

@NgModule({
  declarations: [AgencyFormComponent, AgencyViewComponent],
  imports: [CommonModule, AgencyRoutingModule, SharedComponentModule]
})
export class AgencyModule {}

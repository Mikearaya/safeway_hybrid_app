import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { AgencyApiService } from './agency-api.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [AgencyFormComponent, AgencyViewComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    SharedComponentModule,
    TabModule,
    UploaderModule
  ],
  providers: [AgencyApiService]
})
export class AgencyModule {}

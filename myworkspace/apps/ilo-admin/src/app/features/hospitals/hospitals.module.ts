import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalsViewComponent } from './hospitals-view/hospitals-view.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { HospitalsService } from './hospitals.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [HospitalFormComponent, HospitalsViewComponent],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    TabModule,
    SharedComponentModule,
    UploaderModule
  ],
  providers: [HospitalsService]
})
export class HospitalsModule {}

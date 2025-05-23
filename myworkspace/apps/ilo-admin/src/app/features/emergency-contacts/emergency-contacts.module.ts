import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyContactsRoutingModule } from './emergency-contacts-routing.module';
import { EmergencyContactFormComponent } from './emergency-contact-form/emergency-contact-form.component';
import { EmergencyContactViewComponent } from './emergency-contact-view/emergency-contact-view.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [EmergencyContactFormComponent, EmergencyContactViewComponent],
  imports: [
    CommonModule,
    EmergencyContactsRoutingModule,
    SharedComponentModule,
    UploaderModule,
    TabModule
  ]
})
export class EmergencyContactsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedComponentModule } from '@bionic/shared-component';
import { FeaturesComponent } from './features.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesDashboardComponent } from './features-dashboard/features-dashboard.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@NgModule({
  declarations: [FeaturesComponent, FeaturesDashboardComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    DropDownButtonModule,
    MenuModule,
    ButtonModule,
    SharedComponentModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule {}

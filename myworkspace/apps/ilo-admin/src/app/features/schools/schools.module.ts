import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolFormComponent } from './school-forum/school-form.component';
import { SharedComponentModule } from '@bionic/shared-component';

@NgModule({
  declarations: [SchoolFormComponent, SchoolViewComponent],
  imports: [CommonModule, SchoolsRoutingModule, SharedComponentModule]
})
export class SchoolsModule {}

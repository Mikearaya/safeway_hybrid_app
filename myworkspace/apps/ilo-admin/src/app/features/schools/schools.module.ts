import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolFormComponent } from './school-forum/school-form.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { LessonTypeFormComponent } from './lesson-type-form/lesson-type-form.component';
import { LessonTypeViewComponent } from './lesson-type-view/lesson-type-view.component';
import { LessonTypeService } from './lesson-type.service';
import { SchoolApiService } from '../../school-api.service';

@NgModule({
  declarations: [SchoolFormComponent, SchoolViewComponent, LessonTypeFormComponent, LessonTypeViewComponent],
  imports: [CommonModule, SchoolsRoutingModule, SharedComponentModule],
  providers: [LessonTypeService, SchoolApiService]
})
export class SchoolsModule {}

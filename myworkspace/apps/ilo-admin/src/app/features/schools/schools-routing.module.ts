import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolFormComponent } from './school-forum/school-form.component';
import { LessonTypeViewComponent } from './lesson-type-view/lesson-type-view.component';
import { LessonTypeFormComponent } from './lesson-type-form/lesson-type-form.component';

const routes: Routes = [
  { path: '', component: SchoolViewComponent },
  { path: 'new', component: SchoolFormComponent },
  { path: 'lesson-types', component: LessonTypeViewComponent },
  { path: 'lesson-types/new', component: LessonTypeFormComponent },
  {
    path: 'lesson-types/:lessonTypeId/update',
    component: LessonTypeFormComponent
  },
  { path: ':schoolId/update', component: SchoolFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule {}

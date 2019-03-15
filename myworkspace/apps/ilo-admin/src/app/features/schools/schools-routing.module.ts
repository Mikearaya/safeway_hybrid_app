import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolFormComponent } from './school-forum/school-form.component';

const routes: Routes = [
  { path: '', component: SchoolViewComponent },
  { path: 'new', component: SchoolFormComponent },
  { path: ':schoolId/update', component: SchoolFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule {}

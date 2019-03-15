import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalsViewComponent } from './hospitals-view/hospitals-view.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';

const routes: Routes = [
  { path: '', component: HospitalsViewComponent },
  { path: 'new', component: HospitalFormComponent },
  { path: ':hospitalId/update', component: HospitalFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule {}

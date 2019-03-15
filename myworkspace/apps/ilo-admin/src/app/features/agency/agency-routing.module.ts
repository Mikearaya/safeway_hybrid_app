import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';

const routes: Routes = [
  { path: '', component: AgencyViewComponent },
  { path: 'new', component: AgencyFormComponent },
  { path: ':agencyId/update', component: AgencyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule {}

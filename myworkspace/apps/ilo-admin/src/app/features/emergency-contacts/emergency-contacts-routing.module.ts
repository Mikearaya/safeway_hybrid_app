import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyContactViewComponent } from './emergency-contact-view/emergency-contact-view.component';
import { EmergencyContactFormComponent } from './emergency-contact-form/emergency-contact-form.component';

const routes: Routes = [
  { path: '', component: EmergencyContactViewComponent },
  { path: 'new', component: EmergencyContactFormComponent },
  {
    path: ':emergencyContactId/update',
    component: EmergencyContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyContactsRoutingModule {}

/*
 * @CreateTime: Mar 15, 2019 8:38 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 15, 2019 11:50 PM
 * @Description: Modify Here, Please
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainsViewComponent } from './complains-view/complains-view.component';
import { ComplainDetailViewComponent } from './complain-detail-view/complain-detail-view.component';
import { ComplainTypeFormComponent } from './complain-type-form/complain-type-form.component';
import { ComplainTypeViewComponent } from './complain-type-view/complain-type-view.component';
const routes: Routes = [
  { path: '', component: ComplainsViewComponent },
  { path: 'type', component: ComplainTypeViewComponent },
  { path: 'type/new', component: ComplainTypeFormComponent },
  { path: 'type/:complainTypeId', component: ComplainTypeFormComponent },
  { path: ':complainId', component: ComplainDetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ComplainsRoutingModule {}

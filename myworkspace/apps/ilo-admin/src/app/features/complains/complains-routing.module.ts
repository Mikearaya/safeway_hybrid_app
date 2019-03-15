import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainsViewComponent } from './complains-view/complains-view.component';
import { ComplainDetailViewComponent } from './complain-detail-view/complain-detail-view.component';

const routes: Routes = [
  { path: '', component: ComplainsViewComponent },
  { path: '', component: ComplainDetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplainsRoutingModule {}

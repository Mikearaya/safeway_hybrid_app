import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainsRoutingModule } from './complains-routing.module';
import { ComplainsViewComponent } from './complains-view/complains-view.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { ComplainDetailViewComponent } from './complain-detail-view/complain-detail-view.component';

@NgModule({
  declarations: [ComplainsViewComponent, ComplainDetailViewComponent],
  imports: [CommonModule, ComplainsRoutingModule, SharedComponentModule]
})
export class ComplainsModule {}

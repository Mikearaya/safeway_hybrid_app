import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumsListViewComponent } from './forums-list-view/forums-list-view.component';
import { ForumCreationFormComponent } from './forum-creation-form/forum-creation-form.component';
import { ForumDetailViewComponent } from './forum-detail-view/forum-detail-view.component';
import { ForumsRoutingModule } from './forums-routing.module';
import { SharedComponentModule } from '@bionic/shared-component';
import { ForumApiService } from './forum-api.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    ForumCreationFormComponent,
    ForumsListViewComponent,
    ForumDetailViewComponent
  ],
  imports: [
    CommonModule,
    ForumsRoutingModule,
    SharedComponentModule,
    TabModule
  ],
  providers: [ForumApiService]
})
export class ForumsModule {}

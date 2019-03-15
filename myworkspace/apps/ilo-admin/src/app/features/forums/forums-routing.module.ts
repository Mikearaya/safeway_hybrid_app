import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsListViewComponent } from './forums-list-view/forums-list-view.component';
import { ForumCreationFormComponent } from './forum-creation-form/forum-creation-form.component';
import { ForumDetailViewComponent } from './forum-detail-view/forum-detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: ForumsListViewComponent
  },
  {
    path: 'new',
    component: ForumCreationFormComponent
  },
  {
    path: ':forumId/update',
    component: ForumCreationFormComponent
  },
  {
    path: ':forumId',
    component: ForumDetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule {}

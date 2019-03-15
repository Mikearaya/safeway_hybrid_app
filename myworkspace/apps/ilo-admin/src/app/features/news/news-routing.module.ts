import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsFormComponent } from './news-form/news-form.component';

const routes: Routes = [
  { path: '', component: NewsViewComponent },
  { path: 'new', component: NewsFormComponent },
  { path: ':newsId/update', component: NewsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}

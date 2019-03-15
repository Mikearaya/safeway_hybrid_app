import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCatagoryFormComponent } from './article-catagory-form/article-catagory-form.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ArticleCatagoryViewComponent } from './article-catagory-view/article-catagory-view.component';

const routes: Routes = [
  { path: '', component: ArticlesViewComponent },
  { path: 'new', component: ArticlesFormComponent },
  { path: ':articleId/update', component: ArticlesFormComponent },
  { path: 'catagory', component: ArticleCatagoryViewComponent },
  { path: 'catagory/new', component: ArticleCatagoryFormComponent },
  {
    path: 'catagory/:catagoryId/update',
    component: ArticleCatagoryFormComponent
  },
  { path: ':articleId/update', component: ArticleCatagoryFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}

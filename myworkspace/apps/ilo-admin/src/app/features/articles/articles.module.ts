import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCatagoryViewComponent } from './article-catagory-view/article-catagory-view.component';
import { ArticleCatagoryFormComponent } from './article-catagory-form/article-catagory-form.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ArticlesApiService } from './articles-api.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    ArticleCatagoryViewComponent,
    ArticleCatagoryFormComponent,
    ArticlesFormComponent,
    ArticlesViewComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedComponentModule,
    TabModule
  ],
  providers: [ArticlesApiService]
})
export class ArticlesModule {}

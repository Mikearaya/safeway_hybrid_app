import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedComponentModule } from '@bionic/shared-component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  declarations: [NewsFormComponent, NewsViewComponent],
  imports: [CommonModule, NewsRoutingModule, SharedComponentModule]
})
export class NewsModule {}

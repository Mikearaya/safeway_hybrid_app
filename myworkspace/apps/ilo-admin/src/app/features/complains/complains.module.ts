/*
 * @CreateTime: Mar 15, 2019 8:38 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 15, 2019 8:57 PM
 * @Description: Modify Here, Please
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainsRoutingModule } from './complains-routing.module';
import { ComplainsViewComponent } from './complains-view/complains-view.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { ComplainDetailViewComponent } from './complain-detail-view/complain-detail-view.component';
import { ComplainTypeViewComponent } from './complain-type-view/complain-type-view.component';
import { ComplainTypeFormComponent } from './complain-type-form/complain-type-form.component';
import { ComplainTypeApiService } from './complain-type-api.service';
import { ComplainApiService } from './complain-api.service';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    ComplainsViewComponent,
    ComplainDetailViewComponent,
    ComplainTypeFormComponent,
    ComplainTypeViewComponent
  ],
  imports: [
    CommonModule,
    ComplainsRoutingModule,
    SharedComponentModule,
    TabModule
  ],
  providers: [ComplainTypeApiService, ComplainApiService]
})
export class ComplainsModule {}

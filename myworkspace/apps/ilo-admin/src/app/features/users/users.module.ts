import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserViewComponent } from './user-view/user-view.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { SharedComponentModule } from '@bionic/shared-component';
import { UserApiService } from './user-api.service';

@NgModule({
  declarations: [
    UserFormComponent,
    UserViewComponent,
    PasswordChangeFormComponent
  ],
  imports: [CommonModule, SharedComponentModule, UsersRoutingModule],
  providers: [UserApiService]
})
export class UsersModule {}

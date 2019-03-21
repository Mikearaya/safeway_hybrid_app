import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    data: {
      title: 'Users',
      breadCrum: ''
    }
  },
  {
    path: 'password-update',
    component: PasswordChangeFormComponent,
    data: { title: 'Create user', breadCrum: 'Create' }
  },
  {
    path: 'new',
    component: UserFormComponent,
    data: { title: 'Create user', breadCrum: 'Create' }
  },
  {
    path: ':userId/update',
    component: UserFormComponent,
    data: { title: 'Update user', breadCrum: 'Update' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

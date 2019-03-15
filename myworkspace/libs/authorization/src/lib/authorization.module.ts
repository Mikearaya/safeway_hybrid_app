import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '@bionic/shared-component';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, SharedComponentModule, ReactiveFormsModule],
  exports: [LogInComponent]
})
export class AuthorizationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { AuthorizationModule } from '@bionic/authorization';
import { AuthorizationService } from '../authorization.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RmHeaderInterceptorService } from '@bionic/shared-component';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RmHeaderInterceptorService,
      multi: true
    }
  ]
})
export class AuthenticationModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SharedComponentModule } from '@bionic/shared-component';
import { AuthorizationModule } from '@bionic/authorization';
import { AppRoutungModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AutGuardService } from './aut-guard.service';
import { AuthorizationService } from './authorization.service';
import { SystemApiService } from './system-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutungModule,
    SharedComponentModule,
    AuthorizationModule,
    AuthenticationModule
  ],
  providers: [AutGuardService, AuthorizationService, SystemApiService],

  bootstrap: [AppComponent]
})
export class AppModule {}

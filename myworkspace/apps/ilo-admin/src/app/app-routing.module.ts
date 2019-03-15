import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutGuardService } from './aut-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '',
    canActivate: [AutGuardService],
    loadChildren: './features/features.module#FeaturesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutungModule {}

import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutGuardService implements CanActivate {
  private url = 'users';
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  constructor(private httpClient: HttpClient, private router: Router) {}

  isAuthorized(): boolean {
    return !!localStorage.getItem('token');
  }

  logIn(logInModel: LogInModel): Observable<UserViewModel> {
    return this.httpClient.post<UserViewModel>(`${this.url}/login`, logInModel);
  }
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

export class UserViewModel {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

export class LogInModel {
  userName: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInModel } from '@bionic/authorization';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthorizationService {
  private httpBody: URLSearchParams;
  constructor(private httpClient: HttpClient, private router: Router) {}

  logInUser(authData: LogInModel): Observable<AuthenticationModel | null> {
    this.httpBody = this.prepareRequestBody(authData);
    return this.httpClient.post<AuthenticationModel>(`auth`, authData);
  }

  private prepareRequestBody(customer: LogInModel): URLSearchParams {
    const dataModel = new URLSearchParams();
    for (const key in customer) {
      if (customer.hasOwnProperty(key)) {
        const value = customer[key];
        dataModel.set(key, value);
      }
    }
    return dataModel;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  readToken(): AuthToken {

    const tokenData = jwt_decode(localStorage.getItem('token'));
    return tokenData;
  }
}

export interface AuthenticationModel {
  token: string;
  userName: string;
  expiryDate: Date;
}

export class AuthToken {
  id: number;
  userName: string;
  expiryDate: Date;
}

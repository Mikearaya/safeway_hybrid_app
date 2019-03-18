import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStatModel } from './features/features.component';

@Injectable({
  providedIn: 'root'
})
export class SystemApiService {
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {}

  getLanguagesList(): Observable<any> {
    return this.httpClient.get<any>(`languages`);
  }

  getSystemStatstics(): Observable<DashboardStatModel> {
    return this.httpClient.get<DashboardStatModel>(`dashboard`);
  }
}

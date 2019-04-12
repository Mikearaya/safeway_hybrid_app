import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStatModel } from './features/features.component';

@Injectable()
export class SystemApiService {
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {}

  getLanguagesList(): Observable<any> {
    return this.httpClient.get<any>(`languages`);
  }

  getSystemStatstics(): Observable<DashboardStatModel> {
    return this.httpClient.get<DashboardStatModel>(`dashboard`);
  }

  public getRegionsList(): Observable<any> {
    return this.httpClient.get<any>(`regions`);
  }

  public static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

export class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

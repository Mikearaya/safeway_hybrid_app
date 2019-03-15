import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemApiService {
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {}

  getLanguagesList(): Observable<any> {
    return this.httpClient.get<any>(`languages`);
  }

}

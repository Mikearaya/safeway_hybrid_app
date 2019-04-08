import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComplainViewModel } from './complain-data.model';

@Injectable()
export class ComplainApiService {
  constructor(private httpClient: HttpClient) {}

  getAllComplains(): Observable<ComplainViewModel[]> {
    return this.httpClient.get<ComplainViewModel[]>(`complains`);
  }
  getComplainById(complainId: number): Observable<ComplainViewModel> {
    return this.httpClient.get<ComplainViewModel>(`complains/${complainId}`);
  }
}

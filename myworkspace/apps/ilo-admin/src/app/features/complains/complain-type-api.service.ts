import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplainTypeViewModel, ComplainType } from './complain-data.model';

@Injectable()
export class ComplainTypeApiService {
  private controller = 'complain_types';
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getAllComplainTypes(): Observable<ComplainTypeViewModel[]> {
    return this.httpClient.get<ComplainTypeViewModel[]>(`${this.controller}`);
  }

  getComplainTypeById(id: number): Observable<ComplainType> {
    return this.httpClient.get<ComplainType>(`${this.controller}/${id}`);
  }

  createComplainType(
    complainType: ComplainType
  ): Observable<ComplainTypeViewModel> {
    return this.httpClient.post<ComplainTypeViewModel>(
      `${this.controller}`,
      complainType
    );
  }

  updateComplainType(
    complainType: ComplainType
  ): Observable<ComplainTypeViewModel> {
    return this.httpClient.post<ComplainTypeViewModel>(
      `${this.controller}/update/${complainType.complain_type.ID}`,
      complainType
    );
  }

  deleteComplainType(typeId: number[]): Observable<void> {
    const idArr: any[] = [];
    typeId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(
      `${this.controller}/delete/`,
      this.httpBody.toString()
    );
  }
}

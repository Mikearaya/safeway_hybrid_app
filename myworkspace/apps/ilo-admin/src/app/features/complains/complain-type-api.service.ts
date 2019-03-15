import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ComplainTypeViewModel,
  ComplainTypeModel
} from './complain-data.model';

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

  getComplainTypeById(): Observable<ComplainTypeViewModel> {
    return this.httpClient.get<ComplainTypeViewModel>(`${this.controller}`);
  }

  createComplainType(
    complainType: ComplainTypeModel
  ): Observable<ComplainTypeViewModel> {
    const type = this.prepareRequestBody(complainType);
    return this.httpClient.post<ComplainTypeViewModel>(
      `${this.controller}`,
      type.toString()
    );
  }

  updateComplainType(
    complainType: ComplainTypeModel
  ): Observable<ComplainTypeViewModel> {
    const type = this.prepareRequestBody(complainType);
    return this.httpClient.post<ComplainTypeViewModel>(
      `${this.controller}/update/${complainType.ID}`,
      type.toString()
    );
  }

  deleteComplainType(typeId: number[]): Observable<void> {
    typeId.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `${this.controller}/delete/`,
      this.httpBody.toString()
    );
  }
  private prepareRequestBody(customer: any): URLSearchParams {
    const dataModel = new URLSearchParams();
    for (const key in customer) {
      if (customer.hasOwnProperty(key)) {
        const value = customer[key];
        dataModel.set(key, value);
      }
    }
    return dataModel;
  }
}

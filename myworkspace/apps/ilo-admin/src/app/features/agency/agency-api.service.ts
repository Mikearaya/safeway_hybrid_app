import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgencyViewModel, AgencyModel, Agency } from './agency-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class AgencyApiService {
  private httpBody: URLSearchParams;
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getAgencyById(agencyId: number): Observable<Agency> {
    return this.httpClient.get<Agency>(`agencies/${agencyId}`);
  }

  getAgenciesList(): Observable<AgencyViewModel[]> {
    return this.httpClient.get<AgencyViewModel[]>(`agencies`);
  }

  createAgency(newAgency: Agency): Observable<AgencyViewModel> {
    const agencyModel = this.prepareRequestBody(newAgency);
    return this.httpClient.post<AgencyViewModel>(`agencies`, newAgency);
  }

  updateAgency(updatedAgency: Agency): Observable<void> {
    const agencyModel = this.prepareRequestBody(updatedAgency);
    return this.httpClient.post<void>(
      `agencies/update/${updatedAgency.agency.ID}`,
      updatedAgency
    );
  }

  deleteAgency(indexes: number[]): Observable<void> {
    indexes.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `agencies/delete`,
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

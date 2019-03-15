import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgencyViewModel, AgencyModel } from './agency-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class AgencyApiService {
  private httpBody: URLSearchParams;
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getAgencyById(agencyId: number): Observable<AgencyViewModel> {
    return this.httpClient.get<AgencyViewModel>(`agencies/${agencyId}`);
  }

  getAgenciesList(): Observable<AgencyViewModel[]> {
    return this.httpClient.get<AgencyViewModel[]>(`agencies`);
  }

  createAgency(newAgency: AgencyModel): Observable<AgencyViewModel> {

    const agencyModel = this.prepareRequestBody(newAgency);
    return this.httpClient.post<AgencyViewModel>(
      `agencies`,
      agencyModel.toString()
    );
  }

  updateAgency(updatedAgency: AgencyModel): Observable<void> {
    const agencyModel = this.prepareRequestBody(updatedAgency);
    return this.httpClient.post<void>(
      `agencies/update/${updatedAgency.ID}`,
      agencyModel.toString()
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

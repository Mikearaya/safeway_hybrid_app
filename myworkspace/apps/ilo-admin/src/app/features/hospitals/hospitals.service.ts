import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalViewModel, HospitalModel } from './hospital-data.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private controller = 'hospitals';
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {}

  getHospitalById(hospitalId: number): Observable<HospitalViewModel> {
    return this.httpClient.get<HospitalViewModel>(
      `${this.controller}/${hospitalId}`
    );
  }

  getHospitalsList(): Observable<HospitalViewModel[]> {
    return this.httpClient.get<HospitalViewModel[]>(`${this.controller}`);
  }

  addHospitalAddress(hospital: HospitalModel): Observable<HospitalViewModel> {
    const hospitalData = this.prepareRequestBody(hospital);
    return this.httpClient.post<HospitalViewModel>(
      `${this.controller}`,
      hospitalData.toString()
    );
  }

  updateHospitalAddress(hospital: HospitalModel): Observable<void> {
    const hospitalData = this.prepareRequestBody(hospital);
    return this.httpClient.post<void>(
      `${this.controller}/update/${hospital.id}`,
      hospitalData.toString()
    );
  }

  deleteHospitalAddress(hospitalId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controller}/${hospitalId}`);
  }

  private prepareRequestBody(customer: HospitalModel): URLSearchParams {
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

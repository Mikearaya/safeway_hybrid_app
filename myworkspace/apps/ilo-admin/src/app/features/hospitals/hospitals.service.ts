import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HospitalViewModel,
  HospitalModel,
  Hospital
} from './hospital-data.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private controller = 'hospitals';
  private httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {}

  getHospitalById(hospitalId: number): Observable<Hospital> {
    return this.httpClient.get<Hospital>(`${this.controller}/${hospitalId}`);
  }

  getHospitalsList(): Observable<HospitalViewModel[]> {
    return this.httpClient.get<HospitalViewModel[]>(`${this.controller}`);
  }

  addHospitalAddress(hospital: Hospital): Observable<HospitalViewModel> {
    return this.httpClient.post<HospitalViewModel>(
      `${this.controller}`,
      hospital
    );
  }

  updateHospitalAddress(hospital: Hospital): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${hospital.hospital.ID}`,
      hospital
    );
  }

  deleteHospitalAddress(hospitalId: number[]): Observable<void> {
    const idArr: any[] = [];
    hospitalId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(`${this.controller}/delete`, idArr);
  }
}

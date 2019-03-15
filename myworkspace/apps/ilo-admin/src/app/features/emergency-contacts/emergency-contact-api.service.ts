import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmergencyContactModel } from './emergency-contact-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergencyContactApiService {
  private controller = 'emergency_contacts';

  constructor(private httpClient: HttpClient) {}

  getEmergencyContactById(contactId: number): Observable<EmergencyContactModel> {
    return this.httpClient.get<EmergencyContactModel>(
      `${this.controller}/${contactId}`
    );
  }

  getEmergencyContactssList(): Observable<EmergencyContactModel[]> {
    return this.httpClient.get<EmergencyContactModel[]>(`${this.controller}`);
  }

  addeEmrgencyContactsAddress(emergencyContact: EmergencyContactModel): Observable<EmergencyContactModel> {
    const emergencyContactsData = this.prepareRequestBody(emergencyContact);
    return this.httpClient.post<EmergencyContactModel>(
      `${this.controller}`,
      emergencyContactsData.toString()
    );
  }

  updateEmergencyContactsAddress(emergencyContacts: EmergencyContactModel): Observable<void> {
    const emergencyContactsData = this.prepareRequestBody(emergencyContacts);
    return this.httpClient.post<void>(
      `${this.controller}/update/${emergencyContacts.id}`,
      emergencyContactsData.toString()
    );
  }

  deleteEmergencyContactsAddress(emergencyContactsId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controller}/${emergencyContactsId}`);
  }

  private prepareRequestBody(customer: EmergencyContactModel): URLSearchParams {
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

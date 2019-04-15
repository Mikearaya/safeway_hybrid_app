import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EmergencyContactModel,
  EmergencyContact
} from './emergency-contact-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergencyContactApiService {
  private controller = 'emergency_contacts';

  constructor(private httpClient: HttpClient) {}

  getEmergencyContactById(contactId: number): Observable<EmergencyContact> {
    return this.httpClient.get<EmergencyContact>(
      `${this.controller}/${contactId}`
    );
  }

  getEmergencyContactssList(): Observable<EmergencyContactModel[]> {
    return this.httpClient.get<EmergencyContactModel[]>(`${this.controller}`);
  }

  addeEmrgencyContactsAddress(
    emergencyContact: EmergencyContact
  ): Observable<EmergencyContactModel> {
    return this.httpClient.post<EmergencyContactModel>(
      `${this.controller}`,
      emergencyContact
    );
  }

  updateEmergencyContactsAddress(
    emergencyContacts: EmergencyContact
  ): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${emergencyContacts.emergency_contact.ID}`,
      emergencyContacts
    );
  }

  deleteEmergencyContactsAddress(
    emergencyContactsId: number[]
  ): Observable<void> {
    const idArr: any[] = [];
    emergencyContactsId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(`${this.controller}/delete`, idArr);
  }
}

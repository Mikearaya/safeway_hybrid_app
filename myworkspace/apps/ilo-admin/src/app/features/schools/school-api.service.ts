import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchoolViewModel, SchoolModel, School } from './school-type.model';

@Injectable()
export class SchoolApiService {
  private httpBody: URLSearchParams;
  private controller = 'schools';
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getSchoolById(id: number): Observable<School> {
    return this.httpClient.get<School>(`${this.controller}/${id}`);
  }

  getSchoolsList(): Observable<SchoolViewModel[]> {
    return this.httpClient.get<SchoolViewModel[]>(`${this.controller}`);
  }

  createSchool(school: School): Observable<SchoolViewModel[]> {
    return this.httpClient.post<SchoolViewModel[]>(
      `${this.controller}`,
      school
    );
  }

  updateSchool(school: School): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${school.school.ID}`,
      school
    );
  }

  deleteSchool(typeId: number[]): Observable<void> {
    typeId.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `${this.controller}/delete/`,
      this.httpBody.toString()
    );
  }

  private prepareRequestBody(lesson: any): URLSearchParams {
    const dataModel = new URLSearchParams();
    for (const key in lesson) {
      if (lesson.hasOwnProperty(key)) {
        const value = lesson[key];
        dataModel.set(key, value);
      }
    }
    return dataModel;
  }
}

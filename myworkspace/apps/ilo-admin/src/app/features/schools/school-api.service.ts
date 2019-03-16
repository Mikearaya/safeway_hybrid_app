import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchoolViewModel, SchoolModel } from './school-type.model';

@Injectable()
export class SchoolApiService {
  private httpBody: URLSearchParams;
  private controller = 'schools';
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getSchoolTypeById(id: number): Observable<SchoolViewModel> {
    return this.httpClient.get<SchoolViewModel>(`${this.controller}/${id}`);
  }

  getSchoolsList(): Observable<SchoolViewModel[]> {
    return this.httpClient.get<SchoolViewModel[]>(`${this.controller}`);
  }

  createSchool(lesson: SchoolViewModel): Observable<SchoolViewModel[]> {
    const lessonType = this.prepareRequestBody(lesson);
    return this.httpClient.post<SchoolViewModel[]>(
      `${this.controller}`,
      lessonType.toString()
    );
  }

  updateSchool(lesson: SchoolModel): Observable<void> {
    const lessonType = this.prepareRequestBody(lesson);
    return this.httpClient.post<void>(
      `${this.controller}/update/${lesson.ID}`,
      lessonType.toString()
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

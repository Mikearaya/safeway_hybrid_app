import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LessonTypeModel,
  LessonTypeViewModel,
  LessonType
} from './lesson-type.model';

@Injectable()
export class LessonTypeService {
  private httpBody: URLSearchParams;
  private controller = 'lesson_types';
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getLessonTypeById(id: number): Observable<LessonType> {
    return this.httpClient.get<LessonType>(`${this.controller}/${id}`);
  }

  getLessonTypeList(): Observable<LessonTypeViewModel[]> {
    return this.httpClient.get<LessonTypeViewModel[]>(`${this.controller}`);
  }

  createLessonType(lesson: LessonType): Observable<LessonTypeViewModel> {
    return this.httpClient.post<LessonTypeViewModel>(
      `${this.controller}`,
      lesson
    );
  }

  updateLessonType(lesson: LessonType): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${lesson.lesson_types.ID}`,
      lesson
    );
  }

  deletelessonType(typeId: number[]): Observable<void> {
    const idArr: any[] = [];
    typeId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(`${this.controller}/delete/`, idArr);
  }
}

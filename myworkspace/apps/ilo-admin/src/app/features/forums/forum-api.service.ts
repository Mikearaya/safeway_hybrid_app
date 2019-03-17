import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumViewModel, ForumModel, Forum } from './forum-data.model';

@Injectable()
export class ForumApiService {
  private controller = 'forums';
  httpBody: URLSearchParams;

  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getForumById(hospitalId: number): Observable<Forum> {
    return this.httpClient.get<Forum>(
      `${this.controller}/${hospitalId}`
    );
  }

  getForumList(): Observable<ForumViewModel[]> {
    return this.httpClient.get<ForumViewModel[]>(`${this.controller}`);
  }

  addForum(forum: Forum): Observable<ForumViewModel> {
    //const forumData = this.prepareRequestBody(forum);
    return this.httpClient.post<ForumViewModel>(`${this.controller}`, forum);
  }

  updateForum(forum: Forum): Observable<void> {
    // const forumData = this.prepareRequestBody(forum);
    return this.httpClient.post<void>(
      `${this.controller}/update/${forum.forum. id}`,
      forum
    );
  }

  deleteForum(forumId: number[]): Observable<void> {
    forumId.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `${this.controller}/delete/`,
      this.httpBody.toString()
    );
  }

  private prepareRequestBody(customer: ForumModel): URLSearchParams {
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

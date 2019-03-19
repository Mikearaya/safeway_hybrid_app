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
    return this.httpClient.get<Forum>(`${this.controller}/${hospitalId}`);
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
      `${this.controller}/update/${forum.forum.ID}`,
      forum
    );
  }

  deleteForum(forumId: number[]): Observable<void> {
    const idArr: any[] = [];
    forumId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(`${this.controller}/delete/`, idArr);
  }

}

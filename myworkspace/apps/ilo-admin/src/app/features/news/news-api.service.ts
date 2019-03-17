import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsViewModel, NewsModel, News } from './news-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class NewsApiService {
  private httpBody: URLSearchParams;
  private controller = 'articles';
  constructor(private httpClient: HttpClient) {}

  getNewsById(id: number): Observable<News> {
    return this.httpClient.get<News>(`${this.controller}/${id}`);
  }

  getNewsList(): Observable<NewsViewModel[]> {
    return this.httpClient.get<NewsViewModel[]>(`news`);
  }

  createNews(newNews: News): Observable<NewsViewModel> {
    return this.httpClient.post<NewsViewModel>(`${this.controller}`, newNews);
  }

  updateNews(updatedNews: News): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${updatedNews.article.ID}`,
      updatedNews
    );
  }

  deleteNews(ids: number[]): Observable<void> {
    ids.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `${this.controller}/delete`,
      this.httpBody.toString()
    );
  }
}

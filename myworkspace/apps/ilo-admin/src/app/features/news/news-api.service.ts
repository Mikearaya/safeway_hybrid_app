import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsViewModel, NewsModel } from './news-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class NewsApiService {
  private httpBody: URLSearchParams;
  private controller = 'News';
  constructor(private httpClient: HttpClient) {}

  getNewsById(id: number): Observable<NewsViewModel> {
    return this.httpClient.get<NewsViewModel>(`${this.controller}/${id}`);
  }

  getNewsList(): Observable<NewsViewModel[]> {
    return this.httpClient.get<NewsViewModel[]>(`${this.controller}`);
  }

  createNews(newNews: NewsModel): Observable<NewsViewModel> {
    const newsModel = this.prepareRequestBody(newNews);
    return this.httpClient.post<NewsViewModel>(`${this.controller}`, newsModel.toString());
  }

  updateNews(updatedNews: NewsModel): Observable<void> {
    const newsModel = this.prepareRequestBody(updatedNews);
    return this.httpClient.post<void>(
      `${this.controller}/update/${updatedNews.ID}`,
      newsModel.toString()
    );
  }

  deleteNews(ids: number[]): Observable<void> {
    ids.forEach(id => this.httpBody.append('id[]', `${id}`));
    return this.httpClient.post<void>(
      `${this.controller}/delete`,
      this.httpBody.toString()
    );
  }

  private prepareRequestBody(customer: any): URLSearchParams {
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

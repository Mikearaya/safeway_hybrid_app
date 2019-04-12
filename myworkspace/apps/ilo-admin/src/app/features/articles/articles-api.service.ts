import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ArticleCatagoryViewModel,
  ArticleCatagoryModel,
  ArticleViewModel,
  ArticleModel,
  ArticleCatagory,
  Article
} from './articles-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesApiService {
  private httpBody: URLSearchParams;
  constructor(private httpClient: HttpClient) {
    this.httpBody = new URLSearchParams();
  }

  getArticleCatagories(): Observable<ArticleCatagoryViewModel[]> {
    return this.httpClient.get<ArticleCatagoryViewModel[]>(
      `article_catagory/catagories`
    );
  }

  getArticleCatagoryById(id: number): Observable<ArticleCatagory> {
    return this.httpClient.get<ArticleCatagory>(`article_catagory/${id}`);
  }

  createArticleCatagory(
    articleCatagory: ArticleCatagory
  ): Observable<ArticleCatagoryViewModel> {
    return this.httpClient.post<ArticleCatagoryViewModel>(
      `article_catagory`,
      articleCatagory
    );
  }

  updateArticleCatagory(
    articleCatagory: ArticleCatagory
  ): Observable<ArticleCatagoryViewModel> {
    return this.httpClient.post<ArticleCatagoryViewModel>(
      `article_catagory/update/${articleCatagory.article_catagory.ID}`,
      articleCatagory
    );
  }

  deleteArticleCatagory(
    catagoryId: number[]
  ): Observable<ArticleCatagoryViewModel> {
    const idArr: any[] = [];
    catagoryId.forEach(id => idArr.push({ ID: `${id}` }));
    return this.httpClient.post<ArticleCatagoryViewModel>(
      `article_catagory/delete`,
      idArr
    );
  }

  // article api maipulations
  getArticle(): Observable<ArticleViewModel[]> {
    return this.httpClient.get<ArticleViewModel[]>(`articles`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`articles/${id}`);
  }

  createArticle(article: Article): Observable<ArticleViewModel> {
    return this.httpClient.post<ArticleViewModel>(`articles`, article);
  }

  updateArticle(article: Article): Observable<ArticleViewModel> {
    return this.httpClient.post<ArticleViewModel>(
      `articles/update/${article.article.ID}`,
      article
    );
  }

  deleteArticle(catagoryId: number[]): Observable<ArticleViewModel> {
    const idArr: any[] = [];
    catagoryId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<ArticleViewModel>(`articles/delete`, idArr);
  }
}

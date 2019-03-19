export interface ArticleModel {
  ID?: number;
  header: string;
  content: string;
  CATAGORY_ID?: number;
}

export interface ArticleViewModel {
  CATAGORY_ID?: number;
  ID: number;
  header: string;
  content: string;
}

export interface ArticleLocaleModel {
  ID?: number;
  header: string;
  content: string;
  locale: number;
}

export class Article {
         article: ArticleModel;
         article_locale: ArticleLocaleModel[] = [];
         deleted_ids: ArticleDeletables = new ArticleDeletables();
       }

export class ArticleDeletables {
  article_locale: number[] = [];
}

export interface ArticleCatagoryModel {
  ID?: number;
  name: string;
}

export interface ArticleCatagoryLocaleModel {
  id?: number;
  name: string;
  locale: number;
}

export interface ArticleCatagoryViewModel {
  id: number;
  name: string;
  locale: string;
  date_added: Date;
  date_updated: Date;
}

export class ArticleCatagory {
         article_catagory: ArticleCatagoryModel;
         article_catagory_locale: ArticleCatagoryLocaleModel[] = [];
         deleted_ids: ArticleCatagoryDeletables = new ArticleCatagoryDeletables();
       }

export class ArticleCatagoryDeletables {
  article_catagory_locale: number[] = [];
}

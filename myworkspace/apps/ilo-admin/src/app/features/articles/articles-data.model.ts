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

export class ArticleDeletables {
  article_locale: number[] = [];
}
export class Article {
  image: string;
  audios: any;
  videos: any;
  imageProperties: any;
  audiosProperties: any;
  videosProperties: any;
  token: string;
  article: ArticleModel;
  article_locale: ArticleLocaleModel[];
  deleted_ids: ArticleDeletables;
}

export interface ArticleCatagoryModel {
  ID?: number;
  name: string;
  country: string;
}

export interface ArticleCatagoryLocaleModel {
  ID?: number;
  name: string;
  locale: number;
}

export interface ArticleCatagoryViewModel {
  id: number;
  name: string;
  country: string;
  locale: string;
  date_added: Date;
  date_updated: Date;
}

export class ArticleCatagoryDeletables {
  article_catagory_locale: number[] = [];
}

export class ArticleCatagory {
  article_catagory: ArticleCatagoryModel;
  article_catagory_locale: ArticleCatagoryLocaleModel[] = [];
  deleted_ids: ArticleCatagoryDeletables = new ArticleCatagoryDeletables();
}

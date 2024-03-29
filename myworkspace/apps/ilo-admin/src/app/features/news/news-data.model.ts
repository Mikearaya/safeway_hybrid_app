export interface NewsModel {
  ID?: number;
  header: string;
  content: string;
  audio?: string;
  video?: string;
  image?: string;
}

export interface NewsViewModel {
  ID: number;
  header: string;
  content: string;
  audio?: string;
  video?: string;
  image?: string;
  date_added: Date;
  date_updated: Date;
}

export interface NewsLocaleModel {
  ID?: number;
  header: string;
  content: string;
  locale: number;
}

export class NewsDeletables {
  article_locale: number[] = [];
}

export class News {
  image: string[] = [];
  token: string;
  audios: string[] = [];
  videos: string[] = [];
  article: NewsModel;
  article_locale: NewsLocaleModel[] = [];
  deleted_ids: NewsDeletables = new NewsDeletables();
}

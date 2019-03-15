export interface ArticleModel {
  id?: number;
  title: string;
  content: string;
  type: string;
}

export interface ArticleViewModel {
  id: number;
  title: string;
  content: string;
}

export interface ArticleCatagoryModel {
  id?: number;
  name: string;
}

export interface ArticleCatagoryViewModel {
  id: number;
  name: string;
  locale: string;
  date_added: Date;
  date_updated: Date;
}

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

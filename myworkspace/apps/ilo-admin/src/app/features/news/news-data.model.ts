export class NewsModel {
  ID?: number;
  header: string;
  content: string;
  audio?: string;
  video?: string;
  image?: string;
}

export class NewsViewModel {
  ID: number;
  header: string;
  content: string;
  audio?: string;
  video?: string;
  image?: string;
  date_added: Date;
  date_updated: Date;
}

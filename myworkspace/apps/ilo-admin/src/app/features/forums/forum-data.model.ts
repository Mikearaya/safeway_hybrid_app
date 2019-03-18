export interface ForumModel {
  id?: number;
  title: string;
}

export interface ForumLocaleModel {
  id?: number;
  title: string;
  locale: number;
}

export interface ForumViewModel {
  id: number;
  name: string;
  locale: number;
  totalCount: number;
}

export class Forum {
  forum: ForumModel;
  forum_locale: ForumLocaleModel[] = [];
}

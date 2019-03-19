export interface ForumModel {
  ID?: number;
  title: string;
}

export interface ForumLocaleModel {
  ID?: number;
  title: string;
  locale: number;
}

export interface ForumViewModel {
  ID: number;
  name: string;
  locale: number;
  totalCount: number;
}

export class Forum {
  forum: ForumModel;
  forum_locale: ForumLocaleModel[] = [];
  deleted_ids: ForumDeletables = new ForumDeletables();
}


export class ForumDeletables {
  forum_locale: number[] = [];
}

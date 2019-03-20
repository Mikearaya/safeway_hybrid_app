export interface LessonTypeModel {
  ID?: number;
  type: string;
}

export interface LessonTypeViewModel {
  ID?: number;
  type: string;
  date_added: Date;
  date_updated: Date;
}

export interface LessonTypeLocaleModel {
  ID?: number;
  locale: number;
  type: string;
}

export class LessonType {
  lesson_types: LessonTypeModel;
  lesson_type_locale: LessonTypeLocaleModel[] = [];
  deleted_ids: LessonTypeDeletable = new LessonTypeDeletable();
}

export class LessonTypeDeletable {
  lesson_type_locale: number[] = [];
}

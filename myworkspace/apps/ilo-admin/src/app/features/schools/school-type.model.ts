export class SchoolModel {
  ID?: number;
  name: string;
  address: string;
  phone_number: string;
  region: number;
  fax?: string;
  email?: string;
}

export class SchoolViewModel {
  ID?: number;
  name: string;
  address?: string;
  phone_number: string;
  region?: number;
  LESSON_ID: number;
  date_added: Date;
  date_update: Date;
  fax?: string;
  email?: string;
}

export class SchoolLocaleModel {
  ID?: number;
  name: string;
  address: string;
  locale: number;
}
export interface SchoolLessonsModel {
  LESSON_ID: number;
  SCHOOL_ID?: number;
}

export class School {
  school: SchoolModel;
  school_lessons: SchoolLessonsModel[] = [];
  school_locale: SchoolLocaleModel[] = [];
  deleted_ids: SchoolDeletables = new SchoolDeletables();
}

export class SchoolDeletables {
  school_lessons: number[] = [];
  school_locale: number[] = [];
}

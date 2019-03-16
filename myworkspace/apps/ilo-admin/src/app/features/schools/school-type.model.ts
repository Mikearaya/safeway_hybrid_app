export class SchoolModel {
  ID?: number;
  name: string;
  address: string;
  phone_number?: string;
  region: number;
  LESSON_ID: number;
}

export class SchoolViewModel {
  ID?: number;
  name: string;
  address: string;
  phone_number?: string;
  region: number;
  LESSON_ID: number;
  date_added: Date;
  date_update: Date;
}

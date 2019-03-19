export interface HospitalModel {
  ID?: number;
  name: string;
  phone_number: string;
  address: string;
  region: number;
}

export interface HospitalLocaleModel {
  ID?: number;
  name: string;
  address: string;
  locale: number;
}

export class HospitalViewModel {
  id: number;
  phone_number: string;
  name: string;
  address: string;
  locale: string;
  region: string;
  date_added: Date;
  date_updated: Date;
}

export class Hospital {
  hospital: HospitalModel;
  hospital_locale: HospitalLocaleModel[] = [];
  deleted_ids: HospitalDeletables = new HospitalDeletables();
}

export class HospitalDeletables {
  hospital_locale: number[] = [];
}

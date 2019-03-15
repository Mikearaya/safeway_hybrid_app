export interface HospitalModel {
  id?: number;
  name: string;
  phone_number: string;
  address: string;
  region: string;
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

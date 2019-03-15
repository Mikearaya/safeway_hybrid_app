export class EmergencyContactView {
  id: number;
  name: string;
  phone_number: string;
  address: string;
  region: string;
  locale: string;
  date_added: Date;
  date_updated: DataCue;
}

export class EmergencyContactModel {
  id?: number;
  name: string;
  phone_number: string;
  region: string;
  address: string;
}

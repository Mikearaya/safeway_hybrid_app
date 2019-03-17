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
  ID?: number;
  name: string;
  phone_number: string;
  region: string;
  address: string;
}

export class EmergencyContactLocaleModel {
  ID?: number;
  name: string;
  address: string;
  locale: number;
}

export class EmergencyContact {
  emergency_contact: EmergencyContactModel;
  emergency_contact_locale: EmergencyContactLocaleModel[] = [];
}

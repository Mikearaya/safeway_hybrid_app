export interface AgencyModel {
  ID?: number;
  name: string;
  region?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  license_no?: string;
  fax?: string;
}

export interface AgencyLocaleModel {
  ID?: number;
  name: string;
  address?: string;
  locale: number;
}

export interface AgencyViewModel {
  ID?: number;
  name: string;
  region?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  license_no?: string;
  fax?: string;
  date_added: Date;
  date_updated: Date;
}

export class AgencyDeleteables {
  agency_locale: number[] = [];
}

export class Agency {
  token: string;
  image: string;
  imageProperties: string[] = [];
  agency: AgencyModel;
  agency_locale: AgencyLocaleModel[] = [];
  deleted_ids: AgencyDeleteables = new AgencyDeleteables();
}

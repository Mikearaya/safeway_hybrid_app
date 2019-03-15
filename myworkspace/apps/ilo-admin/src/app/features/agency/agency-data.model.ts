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

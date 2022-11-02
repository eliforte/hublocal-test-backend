export interface IReceivedResponsible {
  company_id: string;
  place_id: string;
  full_name: string;
  address: string;
  address_number: number;
  phone_number: number;
  cep: string;
  complement: string;
  is_main_responsable: boolean;
}

export interface IResponsible {
  id: string;
  company_id?: string | null;
  place_id?: string | null;
  full_name: string;
  address: string;
  address_number: number;
  phone_number: number;
  cep: string;
  complement: string | null;
  is_main_responsable: boolean;
  created_at: Date;
}
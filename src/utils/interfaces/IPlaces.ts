export interface IOnePlace {
  name: string;
  address: string;
  address_number: number;
  complement: string | null;
  cep: string;
}

export interface IPlace {
  place: IOnePlace;
  responsible: {
    full_name: string;
    address: string;
    address_number: number;
    phone_number: number;
    cep: string;
    complement: string;
    is_main_responsable: boolean;
  },
  company_id: string;
}

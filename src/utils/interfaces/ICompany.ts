export interface ISingleCompany {
  id: string;
  name: string;
  cnpj: string;
  description: string;
  created_at: Date;
  user_id: string;
}

export interface ICompany {
  company: ISingleCompany,
  responsible: {
    full_name: string;
    address: string;
    address_number: number;
    phone_number: number;
    cep: string;
    complement: string;
    is_main_responsable: boolean;
  },
}

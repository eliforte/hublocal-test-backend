export interface ITicket {
  id: string;
  title: string;
  created_at: Date;
  update_at: Date;
  created_by_user: string;
  upgradable_by_user: string | null;
  status: string;
  address: string | null;
  address_number: number | null;
  cep: string | null;
  complement: string | null;
  name: string | null;
}

export interface IReceivedTicket {
  ticket: {
    status: string;
    title: string;
    upgradable_by_user: string;
  };
  place: {
    id: string;
    name: string;
    address: string;
    address_number: number;
    complement: string;
    cep: string;
  },
}

export interface IUpdateTicket {
  status: string;
  upgradable_by_user: string;
}

export interface ILogin {
  token: string;
  name: string;
  is_admin: boolean;
}

export interface IBodyLogin {
  email: string;
  password: string;
}

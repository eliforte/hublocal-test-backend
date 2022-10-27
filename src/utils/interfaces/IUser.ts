export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  is_admin?: boolean;
}

export interface IMessageForCreatedUser {
  message: string;
}

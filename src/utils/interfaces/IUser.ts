export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  is_admin?: boolean;
}

export interface IUserDB {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  is_admin?: boolean;
  created_at?: Date;
}

export interface IMessageForCreatedUser {
  message: string;
}

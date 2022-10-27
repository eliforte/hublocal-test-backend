import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../database/prismaClient';
import Auth from '../utils/auth/token';
import { ILogin } from '../utils/interfaces/ILogin';
import { USER_NOT_EXIST, INCORRECT_USER } from '../utils/errors';

interface IBodyLogin {
  email: string;
  password: string;
}

export default class LoginService {
  protected _model: PrismaClient;

  constructor(model: PrismaClient = prismaClient) {
    this._model = model;
  }

  public login = async (body: IBodyLogin): Promise<ILogin> => {
    const user = await this._model.users.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!user) throw USER_NOT_EXIST;

    const isPasswordValid = bcrypt.compareSync(body.password, user.password);
    if (!isPasswordValid) throw INCORRECT_USER;

    const {
      created_at,
      password,
      email,
      is_admin,
      id,
      name,
    } = user;

    const token = Auth.createToken({
      email,
      is_admin,
      id,
      name,
    });

    return { token, name, is_admin };
  };
}

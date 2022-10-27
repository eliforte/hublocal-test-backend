import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../database/prismaClient';
import Auth from '../utils/auth/token';
import { ILogin, IBodyLogin } from '../utils/interfaces/ILogin';
import { USER_NOT_EXIST, INCORRECT_USER } from '../utils/errors';

export default class LoginService {
  protected _model: PrismaClient;

  constructor(model: PrismaClient = prismaClient) {
    this._model = model;
  }

  public login = async (body: IBodyLogin): Promise<ILogin> => {
    const user = await this._model.users.findUnique({
      where: { email: body.email },
    });
    if (!user) throw USER_NOT_EXIST;

    if (user.password !== body.password) throw INCORRECT_USER;

    const {
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

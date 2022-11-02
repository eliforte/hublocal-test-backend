import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../database/prismaClient';
import bcrypt from 'bcrypt'
import Auth from '../utils/auth/token';
import { ILogin, IBodyLogin } from '../utils/interfaces/ILogin';
import { USER_NOT_EXIST, INCORRECT_USER } from '../utils/errors';

export default class LoginService {
  protected _model: PrismaClient;

  constructor(model: PrismaClient = prismaClient) {
    this._model = model;
  }

  public login = async (body: IBodyLogin): Promise<ILogin> => {
    const findUser = await this._model.users.findUnique({
      where: { email: body.email },
    });
    if (!findUser) throw USER_NOT_EXIST;
    
    const isPasswordValid = bcrypt.compareSync(body.password, findUser.password);
    if (!isPasswordValid) throw INCORRECT_USER;

    const {
      email,
      is_admin,
      id,
      name,
    } = findUser;

    const token = Auth.createToken({
      email,
      is_admin,
      id,
      name,
    });

    return { token, name, is_admin };
  };
}

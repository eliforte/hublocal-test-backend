import { PrismaClient } from '@prisma/client';
import { IUser } from '../utils/interfaces/IUser';
import Service from '.';
import { prismaClient } from '../database/prismaClient';
import {
  USER_EXIST,
  ERROR_CREATING_USER,
} from '../utils/errors';

export default class UserService extends Service<IUser> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (user: IUser): Promise<string> => {
    const {
      name, email, password, is_admin,
    } = user;

    const findUser = await this._model.users.findUnique({
      where: { email },
    });
    if (findUser) throw USER_EXIST;

    const verifyIsAdmin = is_admin || false;

    const newUser = await this._model.users.create({
      data: {
        name, email, password, is_admin: verifyIsAdmin,
      },
    });

    if (!newUser) throw ERROR_CREATING_USER;

    return 'Usuário registrado com sucesso';
  };

  public getAll = async (): Promise<IUser[]> => this._model.users.findMany();

  public getById = async (id: string): Promise<IUser | null> => this._model.users.findUnique({
    where: { id },
  });

  public update = async (id: string, user: IUser): Promise<IUser | null> => (
    this._model.users.update({
      where: { id },
      data: { ...user },
    })
  );

  public delete = async (id: string): Promise<IUser | null> => this._model.users.delete({
    where: { id },
  });
}

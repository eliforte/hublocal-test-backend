import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'
import { IUser, IUserDB } from '../utils/interfaces/IUser';
import Service from './service';
import { prismaClient } from '../database/prismaClient';
import {
  USER_EXIST,
  ERROR_CREATING_USER,
} from '../utils/errors';

export default class UserService extends Service<IUser | IUserDB> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (user: IUser, _user_id: string): Promise<IUserDB> => {
    const {
      name, email, password, is_admin,
    } = user;

    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)

    const findUser = await this._model.users.findUnique({
      where: { email },
    });
    if (findUser) throw USER_EXIST;

    const verifyIsAdmin = is_admin || false;

    const newUser = await this._model.users.create({
      data: {
        name, email, password: hash, is_admin: verifyIsAdmin,
      },
    });

    if (!newUser) throw ERROR_CREATING_USER;
    
    return {
      name: newUser.name,
      email: newUser.email,
      is_admin: newUser.is_admin
    };
  };

  public getAll = async (): Promise<IUserDB[]> => {
    const findUsers = await this._model.users.findMany({})
    const allUsers: IUserDB[] = []

    findUsers.map((user) => {
      const { email, is_admin, name, created_at } = user;
      allUsers.push({ email, is_admin, name, created_at });
    })

    return allUsers
  };

  public getById = async (id: string): Promise<IUserDB | null> => {
    const findUser = await this._model.users.findUnique({ where: { id } });
    return {
      name: findUser?.name,
      email: findUser?.email,
      created_at: findUser?.created_at,
      is_admin: findUser?.is_admin,
    }
  }

  public update = async (id: string, user: IUser):
    Promise<IUserDB | null> => {
      const updatedUser = await this._model.users.update({
        where: { id },
        data: { ...user },
      });

      return {
        name: updatedUser?.name,
        email: updatedUser?.email,
        created_at: updatedUser?.created_at,
        is_admin: updatedUser?.is_admin,
      }
    }
  public delete = async (id: string): Promise<IUser | null> => this._model.users.delete({
    where: { id },
  });
}

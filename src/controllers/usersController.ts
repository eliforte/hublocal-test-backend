import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { IUser } from '../utils/interfaces/IUser';
import Controller from './controller';
import Service from '../services/service';
import UserService from '../services/usersServices';

export default class UsersController extends Controller<IUser> {
  constructor(service: Service<IUser> = new UserService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { id } = req.user;
      const created = await this._service.create(req.body, id);
      return res.status(201).json({ message: created });
    } catch (error) {
      return next(error);
    }
  };
}

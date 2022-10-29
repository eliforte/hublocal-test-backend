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
      const created = await this._service.create(req.body);
      return res.status(201).json({
        message: 'Usuário registrado com sucesso!',
        statusCode: 201,
        result: created,
      });
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { id } = req.user;
      const updated = await this._service.update(req.params?.id, req.body, id);
      return res.status(202).json({
        message: 'Usuário atualizado com sucesso!',
        statusCode: 202,
        result: updated,
      });
    } catch (error) {
      return next(error);
    }
  };
}

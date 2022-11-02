import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Controller from './controller';
import Service from '../services/service';
import { IReceivedResponsible, IResponsible } from '../utils/interfaces/IResponsible';
import ResponsibleService from '../services/responsibleService';

export default class ResponsibleController extends Controller<
  IReceivedResponsible | IResponsible
> {
  constructor(service: Service<IReceivedResponsible | IResponsible> = new ResponsibleService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const created = await this._service.create(req.body);
      return res.status(201).json({
        message: 'Responsável criado com sucesso!',
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
      const updated = await this._service.update(req.params.id, req.body);
      return res.status(202).json({
        message: 'Responsável atualizado com sucesso!',
        statusCode: 202,
        result: updated,
      });
    } catch (error) {
      return next(error);
    }
  };
}

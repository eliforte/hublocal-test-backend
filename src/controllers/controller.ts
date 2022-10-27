import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Service from '../services';

export default abstract class Controller<T> {
  protected _service: Service<T>;

  constructor(service: Service<T>) {
    this._service = service;
  }

  public abstract create(req: Req, res: Res, next: Next): Promise<typeof res | void>;

  public getAll = async (_req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const getAll = await this._service.getAll();
      return res.status(200).json(getAll);
    } catch (error) {
      return next(error);
    }
  };

  public getById = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const getById = await this._service.getById(req.params.id);
      return res.status(200).json(getById);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const update = await this._service.update(req.params.id, req.body);
      return res.status(202).json(update);
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      await this._service.delete(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return next(error);
    }
  };
}

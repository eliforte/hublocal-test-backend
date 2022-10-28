import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { IPlace, IOnePlace } from '../utils/interfaces/IPlace';
import Controller from './controller';
import Service from '../services/service';
import PlaceService from '../services/placeService';

export default class PlaceController extends Controller<IPlace | IOnePlace> {
  constructor(service: Service<IOnePlace | IPlace> = new PlaceService()) {
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

  public update = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const user_id = req.user.id;
      const { id } = req.params;
      const update = await this._service.update(id, req.body, user_id);
      return res.status(202).json({ ...update });
    } catch (error) {
      return next(error);
    }
  };
}

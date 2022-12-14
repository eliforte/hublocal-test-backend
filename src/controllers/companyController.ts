import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ICompany, ISingleCompany } from '../utils/interfaces/ICompany';
import Controller from './controller';
import Service from '../services/service';
import CompanyService from '../services/companyService';

export default class CompanyController extends Controller<ICompany | ISingleCompany> {
  constructor(service: Service<ICompany | ISingleCompany> = new CompanyService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { id } = req.user;
      const created = await this._service.create(req.body, id);
      return res.status(201).json({
        message: 'Empresa registrada com sucesso!',
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
      const updated = await this._service.update(req.params.id, req.body, id);
      return res.status(202).json({
        message: 'Empresa atualizada com sucesso!',
        statusCode: 202,
        result: updated,
      });
    } catch (error) {
      return next(error);
    }
  };
}

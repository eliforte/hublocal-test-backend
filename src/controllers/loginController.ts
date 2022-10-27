import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import LoginService from '../services/loginService';

export default class LoginControler {
  protected _service: LoginService;

  constructor(service: LoginService = new LoginService()) {
    this._service = service;
  }

  public login = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const result = await this._service.login(req.body);
      res.status(200).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
}

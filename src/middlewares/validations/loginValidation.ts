import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ObjectSchema } from 'joi';
import { SCHEMALogin } from '../../utils/schemas/loginSchema';

export default class ValidadeLogin {
  protected _schema: ObjectSchema;

  constructor(schema: ObjectSchema = SCHEMALogin) {
    this._schema = schema;
  }

  public validateReqBody = async (req: Req, res: Res, next: Next): Promise <typeof res | void> => {
    try {
      const result = this._schema.validate(req.body);
      if (result.error) {
        next(result.error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

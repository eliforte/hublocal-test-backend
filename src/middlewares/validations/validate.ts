import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ObjectSchema } from 'joi';

export default class Validate {
  protected _schema: ObjectSchema;

  protected _updateSchema: ObjectSchema;

  constructor(schema: ObjectSchema, updateSchema: ObjectSchema) {
    this._schema = schema;
    this._updateSchema = updateSchema;
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

  public validateUpdate = async (req: Req, res: Res, next: Next): Promise <typeof res | void> => {
    try {
      const itensForUpdatedChecked = this._updateSchema.validate(req.body);
      if (itensForUpdatedChecked.error) {
        next(itensForUpdatedChecked.error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

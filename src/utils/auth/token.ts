import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';
import { MISSING_TOKEN, TOKEN_INVALID, USER_NOT_ADMIN } from '../errors';

export default class Auth {
  public static createToken = (payload: IToken): string => {
    const options: SignOptions = {
      expiresIn: '7d',
    };
    const token = jwt.sign(payload, `${process.env.SECRET}`, options);
    return token;
  };

  public static verifyToken = async (req: Req, _res: Res, next: Next): Promise<void> => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw MISSING_TOKEN;
      const decoded = jwt.verify(token, `${process.env.SECRET}`) as IToken;
      if (!decoded) throw TOKEN_INVALID;
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public static isAdmin = async (req: Req, _res: Res, next: Next): Promise<void> => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (token) {
        const decoded = jwt.verify(token, `${process.env.SECRET}`) as IToken;
        if (decoded.is_admin!) throw USER_NOT_ADMIN;
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

import { Router } from 'express';
import UserController from '../controllers/loginController';
import ValidadeLogin from '../middlewares/validations/loginValidation';

export default class LoginRoutes {
  private _router: Router;

  private _controller: UserController;

  private _validate: ValidadeLogin;

  constructor(
    controller: UserController = new UserController(),
    validate = new ValidadeLogin(),
  ) {
    this._router = Router();
    this._validate = validate;
    this._controller = controller;
    this._routes();
  }

  private _routes(): void {
    this._router.post(
      '/api/v1/login',
      this._validate.validateReqBody,
      this._controller.login,
    );
  }

  public get router(): Router {
    return this._router;
  }
}

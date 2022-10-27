import { Router } from 'express';
import LoginController from '../controllers/loginController';
import ValidadeLogin from '../middlewares/validations/loginValidation';

export default class LoginRoutes {
  private _router: Router;

  private _path = '/api/v1/login';

  private _controller: LoginController;

  private _validate: ValidadeLogin;

  constructor(
    controller: LoginController = new LoginController(),
    validate: ValidadeLogin = new ValidadeLogin(),
  ) {
    this._router = Router();
    this._validate = validate;
    this._controller = controller;
    this._routes();
  }

  public get router(): Router {
    return this._router;
  }

  private _routes(): void {
    this._router.post(
      this._path,
      this._validate.validateReqBody,
      this._controller.login,
    );
  }
}

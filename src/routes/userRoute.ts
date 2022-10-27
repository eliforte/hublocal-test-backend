import { IUser } from '../utils/interfaces/IUser';
import CustomRouter from './customRouter';
import Controller from '../controllers/controller';
import UsersController from '../controllers/usersController';
import Validate from '../middlewares/validations/validate';
import ValidadeUser from '../middlewares/validations/usersValidation';
import Auth from '../utils/auth/token';

export default class UserRouter extends CustomRouter<IUser> {
  protected _path = '/api/v1/users';

  private _validate: Validate;

  constructor(
    controller: Controller<IUser> = new UsersController(),
    validate: Validate = new ValidadeUser(),
  ) {
    super(controller);
    this._validate = validate;
    this._routes();
  }

  protected _routes = (): void => {
    this._router.post(
      this._path,
      this._validate.validateReqBody,
      this._controller.create,
    );
    this._router.get(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.getById,
    );
    this._router.get(
      this._path,
      Auth.verifyToken,
      this._controller.getAll,
    );
    this._router.put(
      `${this._path}/:id`,
      Auth.verifyToken,
      Auth.isAdmin,
      this._validate.validateUpdate,
      this._controller.update,
    );
    this._router.delete(
      `${this._path}/:id`,
      Auth.verifyToken,
      Auth.isAdmin,
      this._controller.delete,
    );
  };
}

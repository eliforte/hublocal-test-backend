import { IReceivedResponsible, IResponsible } from '../utils/interfaces/IResponsible';
import CustomRouter from './customRouter';
import Controller from '../controllers/controller';
import ResponsibleController from '../controllers/responsibleController';
import ValidateResponsible from '../middlewares/validations/responsibleValidation';
import Validate from '../middlewares/validations/validate';
import Auth from '../utils/auth/token';

export default class ResponsibleRouter extends CustomRouter<IReceivedResponsible | IResponsible> {
  protected _path = '/api/v1/responsibles';

  private _validate: Validate;

  constructor(
    controller: Controller<IReceivedResponsible | IResponsible> = new ResponsibleController(),
    validate: Validate = new ValidateResponsible(),
  ) {
    super(controller);
    this._validate = validate;
    this._routes();
  }

  protected _routes = (): void => {
    this._router.post(
      this._path,
      Auth.verifyToken,
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
      this._validate.validateUpdate,
      this._controller.update,
    );
    this._router.delete(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.delete,
    );
  }
}
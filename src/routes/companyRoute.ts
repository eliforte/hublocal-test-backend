import { ICompany, ISingleCompany } from '../utils/interfaces/ICompany';
import CustomRouter from './customRouter';
import Controller from '../controllers/controller';
import CompanyController from '../controllers/companyController';
import ValidadeCompany from '../middlewares/validations/companyValidation';
import Validate from '../middlewares/validations/validate';
import Auth from '../utils/auth/token';

export default class CompanyRouter extends CustomRouter<ICompany | ISingleCompany> {
  protected _path = '/api/v1/companies';

  private _validate: Validate;

  constructor(
    controller: Controller<ICompany | ISingleCompany> = new CompanyController(),
    validate: Validate = new ValidadeCompany(),
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

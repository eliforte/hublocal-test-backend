import { IOnePlace, IPlace } from '../utils/interfaces/IPlaces';
import CustomRouter from './customRouter';
import Controller from '../controllers/controller';
import PlaceController from '../controllers/placeController';
import ValidadePlaces from '../middlewares/validations/placesValidation';
import Validate from '../middlewares/validations/validate';
import Auth from '../utils/auth/token';

export default class PlaceRouter extends CustomRouter<IOnePlace | IPlace> {
  protected _path = '/api/v1/places';

  private _validate: Validate;

  constructor(
    controller: Controller<IOnePlace | IPlace> = new PlaceController(),
    validate: Validate = new ValidadePlaces(),
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
    this._router.get(
      this._path,
      Auth.verifyToken,
      this._controller.getAll,
    );
  };
}

import { ITicket, IReceivedTicket, IUpdateTicket } from '../utils/interfaces/ITicket';
import CustomRouter from './customRouter';
import Controller from '../controllers/controller';
import TicketsController from '../controllers/ticketController';
import ValidadeTickets from '../middlewares/validations/ticketsValidation';
import Validate from '../middlewares/validations/validate';
import Auth from '../utils/auth/token';

export default class TicketRouter extends CustomRouter<
  ITicket | IReceivedTicket | IUpdateTicket
  > {
  protected _path = '/api/v1/tickets';

  private _validate: Validate;

  constructor(
    controller: Controller<ITicket | IReceivedTicket | IUpdateTicket> = new TicketsController(),
    validate: Validate = new ValidadeTickets(),
  ) {
    super(controller);
    this._validate = validate;
    this._routes();
  }

  protected _routes = (): void => {
    this.router.post(
      this._path,
      Auth.verifyToken,
      this._validate.validateReqBody,
      this._controller.create,
    );
    this.router.get(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.getById,
    );
    this.router.get(
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
      `${this._router}/:id`,
      Auth.verifyToken,
      this._controller.delete,
    );
  };
}

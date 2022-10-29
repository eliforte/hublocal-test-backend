import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ITicket, IReceivedTicket, IUpdateTicket } from '../utils/interfaces/ITicket';
import Controller from './controller';
import Service from '../services/service';
import TicketService from '../services/ticketService';

export default class TicketsController extends Controller<
  ITicket | IReceivedTicket | IUpdateTicket
> {
  constructor(service: Service<ITicket | IReceivedTicket | IUpdateTicket> = new TicketService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { id } = req.user;
      const created = await this._service.create(req.body, id);
      return res.status(201).json({
        message: 'Ticket criado com sucesso!',
        statusCode: 201,
        result: created,
      });
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { id } = req.user;
      const updated = await this._service.update(req.params.id, req.body, id);
      return res.status(202).json({
        message: 'Ticket atualizado com sucesso!',
        statusCode: 202,
        result: updated,
      });
    } catch (error) {
      return next(error);
    }
  };
}

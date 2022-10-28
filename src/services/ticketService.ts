import { PrismaClient } from '@prisma/client';
import { IReceivedTicket, ITicket, IUpdateTicket } from '../utils/interfaces/ITicket';
import Service from './service';
import { prismaClient } from '../database/prismaClient';
import {
  TICKET_EXIST,
  ERROR_CREATING_TICKET,
  USER_NOT_AUTHORIZATION,
  ERROR_UPDATE_TICKET,
} from '../utils/errors';

export default class TicketService extends Service<IReceivedTicket | ITicket | IUpdateTicket> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (data: IReceivedTicket, user_id: string): Promise<string> => {
    const { ticket, place } = data;
    const {
      address,
      address_number,
      cep,
      complement,
      name,
    } = place;

    const findTicket = await this._model.tickets.findUnique({
      where: { place_id: place.id },
    });

    if (findTicket?.status !== 'CONCLUÍDO') throw TICKET_EXIST;

    if (findTicket?.status === 'CONCLUÍDO' || !findTicket) {
      const newTicket = await this._model.tickets.create({
        data: {
          ...ticket,
          address,
          address_number,
          cep,
          complement,
          name,
          created_by_user: user_id,
          place: {
            connect: { id: place.id },
          },
        },
      });

      if (!newTicket) throw ERROR_CREATING_TICKET;
    }
    return 'Ticket criado com sucesso!.';
  };

  public getAll = async (): Promise<ITicket[]> => this._model.tickets.findMany();

  public getById = async (id: string): Promise<ITicket | null> => (
    this._model.tickets.findUnique({
      where: { id },
    })
  );

  public update = async (id: string, data: IUpdateTicket, user_id: string)
  : Promise<ITicket | null> => {
    const findTicket = await this._model.tickets.findUnique({
      where: { id },
    });

    if (
      findTicket?.created_by_user !== user_id
      || findTicket?.upgradable_by_user !== user_id
    ) throw USER_NOT_AUTHORIZATION;

    const updatedTicket = await this._model.tickets.update({
      where: { id },
      data: { ...data },
    });

    if (!updatedTicket) throw ERROR_UPDATE_TICKET;

    return updatedTicket;
  };

  public delete = async (id: string, user_id: string): Promise<ITicket | null> => {
    const findTicket = await this._model.tickets.findUnique({
      where: { id },
    });

    if (
      findTicket?.created_by_user !== user_id
      || findTicket?.upgradable_by_user !== user_id
    ) throw USER_NOT_AUTHORIZATION;

    return this._model.tickets.delete({
      where: { id },
    });
  };
}

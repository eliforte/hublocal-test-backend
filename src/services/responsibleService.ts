import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../database/prismaClient';
import { IReceivedResponsible, IResponsible } from '../utils/interfaces/IResponsible';
import Service from './service';
import {
  RESPONSIBLE_EXIST,
  ERROR_UPDATE_RESPONSIBLE,
} from '../utils/errors';

export default class ResponsibleService extends Service<IResponsible | IReceivedResponsible> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (responsibleInfos: IReceivedResponsible): Promise<IResponsible> => {
    const {
      company_id,
      place_id,
      address,
      address_number,
      cep,
      complement,
      full_name,
      is_main_responsable,
      phone_number
    } = responsibleInfos;
 
    const findResponsible = await this._model.responsables.findFirst({
      where: { OR: [ { company_id }, { place_id } ] }
    })
    
    if (findResponsible) throw RESPONSIBLE_EXIST;

    const newResponsible = await this._model.responsables.create({
      data: {
        address,
        address_number,
        cep,
        complement,
        full_name,
        is_main_responsable,
        phone_number,
        place: { connect: { id: place_id } },
        company: { connect: { id: company_id } }
      }
    })

    return newResponsible;
  }

  public getAll = async (): Promise<IResponsible[]> => this._model.responsables.findMany();

  public getById = async (id: string): Promise<IResponsible | null> => (
    this._model.responsables.findUnique({
      where: { id },
    })
  );

  public update = async (id: string, responsibleInfos: IReceivedResponsible): Promise<IResponsible | null> => {
    const updatedResponsible = await this._model.responsables.update({
      where: { id },
      data: { ...responsibleInfos }
    })

    if (!updatedResponsible) throw ERROR_UPDATE_RESPONSIBLE;

    return updatedResponsible;
  }

  public delete = async (id: string): Promise<IResponsible | null> => this._model.responsables.delete({
    where: { id },
  });
}

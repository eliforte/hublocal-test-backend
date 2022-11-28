import { PrismaClient } from '@prisma/client';
import { IOnePlace, IPlace } from '../utils/interfaces/IPlace';
import Service from './service';
import { prismaClient } from '../database/prismaClient';
import {
  PLACE_EXIST,
  ERROR_CREATING_PLACE,
} from '../utils/errors';

export default class PlaceService extends Service<IPlace | IOnePlace> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (data: IPlace, _user_id: string): Promise<IOnePlace> => {
    const { place, responsible, company_id } = data;
    const { name, address, address_number } = place;
    const { phone_number } = responsible;

    const findPlace = await this._model.places.findFirst({
      where: { name, address, address_number },
    });

    if (findPlace) throw PLACE_EXIST;

    const findResponsable = await this._model.responsables.findUnique({
      where: { phone_number },
    });

    const newPlace = await this._model.places.create({
      data: {
        ...place,
        company_id,
        responsables: {
          connectOrCreate: {
            where: { id: `${findResponsable?.id}` },
            create: { ...responsible },
          },
        },
      },
    });

    if (!newPlace) throw ERROR_CREATING_PLACE;

    return newPlace;
  };

  public getAll = async (): Promise<IOnePlace[]> => {
    const findPlaces = await this._model.places.findMany({
      include: {
        company: {
          select: {
            name: true
          }
        },
        responsables: {
          select: {
            full_name: true,
            is_main_responsable: true
          }
        }
      }
    })

    return findPlaces
  };

  public getById = async (id: string): Promise<IOnePlace | null> => (
    this._model.places.findUnique({
      where: { id },
    })
  );

  public update = async (id: string, place: IOnePlace, user_id: string)
  : Promise<IOnePlace | null> => {
    const ticketStatus = await this._model.tickets.findFirst({
      where: { place_id: id },
    });

    if (ticketStatus?.status === 'CONCLUÍDO' || !ticketStatus) {
      const updatedPlace = await this._model.places.update({
        where: { id },
        data: {
          ...place,
          tickets: {
            create: {
              title: `${id}-${place.name}`,
              created_by_user: user_id,
              status: 'PENDENTE',
              ...place,
            },
          },
        },
      });

      return updatedPlace;
    }

    const updatedPlace = await this._model.places.update({
      where: { id },
      data: {
        ...place,
        tickets: {
          update: {
            where: { place_id: id },
            data: {
              ...place,
            },
          },
        },
      },
    });

    return updatedPlace;
  };

  public delete = async (id: string): Promise<IOnePlace | null> => (
    this._model.places.delete({
      where: { id },
    })
  );
}

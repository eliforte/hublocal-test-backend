import { PrismaClient } from '@prisma/client';
import { ICompany, ISingleCompany } from '../utils/interfaces/ICompany';
import Service from './service';
import { prismaClient } from '../database/prismaClient';
import {
  COMPANY_EXIST,
  ERROR_CREATING_COMPANY,
} from '../utils/errors';

export default class CompanyService extends Service<ICompany | ISingleCompany> {
  constructor(model: PrismaClient = prismaClient) {
    super(model);
  }

  public create = async (data: ICompany, user_id: string): Promise<ISingleCompany> => {
    const { company, responsible } = data;
    const { cnpj } = company;
    const { phone_number } = responsible;

    const findCompany = await this._model.companies.findUnique({
      where: { cnpj },
    });
    if (findCompany) throw COMPANY_EXIST;

    const findResponsable = await this._model.responsables.findUnique({
      where: { phone_number },
    });

    const newCompany = await this._model.companies.create({
      data: {
        ...company,
        user_id,
        responsables: {
          connectOrCreate: {
            where: { id: findResponsable?.id },
            create: { ...responsible },
          },
        },
      },
    });

    if (!newCompany) throw ERROR_CREATING_COMPANY;

    return newCompany;
  };

  public getAll = async (): Promise<ISingleCompany[]> => this._model.companies.findMany();

  public getById = async (id: string): Promise<ISingleCompany | null> => (
    this._model.companies.findUnique({
      where: { id },
    })
  );

  public update = async (id: string, user: ISingleCompany): Promise<ISingleCompany | null> => (
    this._model.companies.update({
      where: { id },
      data: { ...user },
    })
  );

  public delete = async (id: string): Promise<ISingleCompany | null> => (
    this._model.companies.delete({
      where: { id },
    })
  );
}

import { PrismaClient } from '@prisma/client';

export default abstract class Service<T> {
  protected _model: PrismaClient;

  constructor(model: PrismaClient) {
    this._model = model;
  }

  public abstract create(data: T, user_id?: string | undefined): Promise<T | string>;

  public abstract getAll(): Promise<T[]>;

  public abstract getById(id: string): Promise<T | null>;

  public abstract update(id: string, data: T, user_id?: string | undefined): Promise<T | null>;

  public abstract delete(id: string, user_id?: string): Promise<T | null>;
}

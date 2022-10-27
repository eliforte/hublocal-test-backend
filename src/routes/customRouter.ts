import { Router } from 'express';
import Controller from '../controllers/controller';

export default abstract class CustomRouter<T> {
  protected _router: Router;

  protected abstract _path: string;

  protected _controller: Controller<T>;

  constructor(controller: Controller<T>) {
    this._router = Router();
    this._controller = controller;
  }

  public get router(): Router {
    return this._router;
  }

  protected abstract _routes(): void;
}

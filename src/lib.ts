import { AlphonseOptions, IAdapter } from './types';

export default class Alphonse {
  private _port: string | number;

  private _host: string;

  private _adapter?: IAdapter;

  constructor({ port, host, adapter }: AlphonseOptions) {
    this._port = port;
    this._host = host;
    this._adapter = adapter;
  }

  get port(): string | number {
    return this._port;
  }

  get host(): string {
    return this._host;
  }

  get adapter(): IAdapter | undefined {
    return this._adapter;
  }
}

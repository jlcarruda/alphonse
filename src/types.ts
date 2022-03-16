import { Server } from 'http';

export interface IAdapter<T = Server> {
  client: T;
}

export type AlphonseOptions = {
  port: string | number;
  host: string;
  adapter?: IAdapter;
};

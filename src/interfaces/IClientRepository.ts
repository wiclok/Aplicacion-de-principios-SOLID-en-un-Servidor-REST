import { Client } from '../models/Cliente.model';

export interface IClientRepository {
  create(client: Client): Client;
  findById(id: string): Client | undefined;
  update(id: string, client: Client): Client | undefined;
  delete(id: string): boolean;
}

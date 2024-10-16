import { IClientRepository } from '../interfaces/IClientRepository';
import { Client } from '../models/Cliente.model';

export class ClientRepositoryMongo implements IClientRepository {
  private clients: Client[] = [];

  public create(client: Client): Client {
    this.clients.push(client);
    return client;
  }

  public findById(id: string): Client | undefined {
    return this.clients.find(client => client.id === id);
  }

  public update(id: string, client: Client): Client | undefined {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients[index] = client;
      return client;
    }
    return undefined;
  }

  public delete(id: string): boolean {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
      return true;
    }
    return false;
  }
}

// service/ClientService.ts
import { IClientRepository } from '../interfaces/IClientRepository';
import { Client } from '../models/Cliente.model';

export class ClientService {
  constructor(private clientRepository: IClientRepository) {}

  public create(clientData: Client): Client {
    return this.clientRepository.create(clientData);
  }

  public find(id: string): Client | undefined {
    return this.clientRepository.findById(id);
  }

  public update(id: string, clientData: Client): Client | undefined {
    return this.clientRepository.update(id, clientData);
  }

  public delete(id: string): boolean {
    return this.clientRepository.delete(id);
  }
}

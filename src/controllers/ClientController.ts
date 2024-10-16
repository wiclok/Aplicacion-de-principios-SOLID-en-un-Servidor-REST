import { Request, Response } from 'express';
import { ClientService } from '../service/ClientService';

export class ClientController {
  constructor(private clientService: ClientService) {}

  public create(req: Request, res: Response): void {
    const client = this.clientService.create(req.body);
    res.status(201).json(client);
  }

  public find(req: Request, res: Response): void {
    const client = this.clientService.find(req.params.id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  }

  public update(req: Request, res: Response): void {
    const updatedClient = this.clientService.update(req.params.id, req.body);
    if (updatedClient) {
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  }

  public delete(req: Request, res: Response): void {
    const deleted = this.clientService.delete(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  }
}
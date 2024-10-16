import express, { Application } from 'express';
import { VehicleController } from './controllers/VehicleController';
import { VehicleService } from './service/VehicleService';
import { VehicleRepositoryMongo } from './repositories/VehicleRepositoryMongo';
import { ClientController } from './controllers/ClientController';
import { ClientService } from './service/ClientService';
import { ClientRepositoryMongo } from './repositories/ClientRepositoryMongo';
import { ClientRepositoryPostgres } from './repositories/ClientRepositoryPostgres';
import { VehicleRepositoryPostgres } from './repositories/VehicleRepositoryPostgres';
import { vehicleRoutes } from './routes/Vehicles.routes';
import { clientRouter } from './routes/Cliente.routes';

class Server {
  private static instance: Server;
  private app: Application;
  private port: number;
  private vehicleRepository: VehicleRepositoryMongo | VehicleRepositoryPostgres;
  private vehicleService: VehicleService;
  private vehicleController: VehicleController;
  private clientRepository: ClientRepositoryMongo | ClientRepositoryPostgres;
  private clientService: ClientService;
  private clientController: ClientController;

  private constructor() {
    this.app = express();
    this.port = 3000;

    this.vehicleRepository = new VehicleRepositoryMongo();
    this.vehicleService = new VehicleService(this.vehicleRepository);
    this.vehicleController = new VehicleController(this.vehicleService);

    this.clientRepository = new ClientRepositoryPostgres();
    this.clientService = new ClientService(this.clientRepository);
    this.clientController = new ClientController(this.clientService);

    this.middlewares();
    this.routes();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api', vehicleRoutes(this.vehicleController))
    this.app.use('/api', clientRouter(this.clientController))
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
